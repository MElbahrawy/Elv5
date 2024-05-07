import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./PostsList.css";
import AddPost from "./AddPost";
import { posts } from "../../Data/posts";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import { server } from "../../Data/APIs";

export default function PostsList() {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(server.Posts)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        // axios.get(server.GetByUserId+ res.UserId).then((dataUser) => setPostsData())
        setPostsData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // setPostsData(posts);
      });
  }, []);

  //   let address = "benha/Qalubia/Egypt";
  //   console.log(address.split("/"));
  //   let devideAddress = (address) => {
  //     let city = address.split("/")[0];
  //     let area = address.split("/")[1];
  //     let country = address.split("/")[2];
  //   };

  return (
    <>
      <AddPost postsData={postsData} setPostsData={setPostsData} />
      <Container className="posts-holder my-4">
        {loading && <LoadingSpinner />}
        {postsData.reverse().map((post, index) => (
          <React.Fragment key={index}>
            <Fade>
              <PostCard
                id={post.postId}
                name={
                  post.userDto.accountFName + " " + post.userDto.accountLName
                }
                date={post.postTime}
                content={post.postText}
                type={post.userDto.accountType}
                img={post.img}
                media={post.postMedia}
                phoneNumber={post.userDto.phoneNumber}
              />
              <hr />
            </Fade>
          </React.Fragment>
        ))}
      </Container>
    </>
  );
}
