import React from "react";
import AddPost from "../components/AddPost";
import PostsList from "../components/PostsList";

export default function Posts() {
  return (
    <section>
      <div className="container d-flex flex-column">
        <AddPost />
        <PostsList />
      </div>
    </section>
  );
}
