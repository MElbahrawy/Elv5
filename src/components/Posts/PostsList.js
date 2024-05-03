import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./PostsList.css";
import AddPost from "./AddPost";
import { posts } from "../../Data/posts";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import LoadingSpinner from "../Utilities/LoadingSpinner";

export default function PostsList() {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/posts")
      .then((res) => {
        setLoading(false);
        setPostsData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setPostsData(posts);
      });
  }, [postsData]);

  return (
    <>
      <AddPost postsData={postsData} setPostsData={setPostsData} />
      <Container className="posts-holder my-4">
        {loading && <LoadingSpinner />}
        {postsData.map((post, index) => (
          <React.Fragment key={index}>
            <Fade>
              <PostCard
                id={post.id}
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
