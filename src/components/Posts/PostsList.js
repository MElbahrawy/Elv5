import React, { useState } from "react";
import PostCard from "./PostCard";
import "./PostsList.css";
import AddPost from "./AddPost";
import { posts } from "../../Data/posts";
import { Container } from "react-bootstrap";

export default function PostsList() {
  const [postsData, setPostsData] = useState(posts);

  return (
    <>
      <AddPost postsData={postsData} setPostsData={setPostsData} />
      <Container className="posts-holder">
        {postsData.map((post) => (
          <React.Fragment key={post.id}>
            <PostCard
              img={post.img}
              name={post.name}
              type={post.type}
              date={post.date}
              content={post.content}
              phoneNumber={post.phoneNumber}
            />
            <hr />
          </React.Fragment>
        ))}
      </Container>
    </>
  );
}
