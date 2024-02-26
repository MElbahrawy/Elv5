import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./PostsList.css";
import AddPost from "./AddPost";
import { posts } from "../../Data/posts";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Fade } from "react-awesome-reveal";

export default function PostsList() {
  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/posts")
      .then((res) => res.data)
      .then((posts) => setPostsData(posts))
      .catch(() => {
        setPostsData(posts);
      });
  }, []);

  return (
    <>
      <AddPost postsData={postsData} setPostsData={setPostsData} />
      <Container className="posts-holder">
        {postsData.map((post) => (
          <React.Fragment key={post.id}>
            <Fade>
              <PostCard
                img={post.img}
                name={post.name}
                type={post.type}
                date={post.date}
                content={post.content}
                phoneNumber={post.phoneNumber}
              />
              <hr />
            </Fade>
          </React.Fragment>
        ))}
      </Container>
    </>
  );
}
