import { React, useEffect, useState } from "react";
import Post from "./post";
import usePostStore from "../../store/post";
import "../../styles/posts.scss";

const Posts = () => {
  const posts = usePostStore((state) => state.posts);

  console.log("total posts = " + posts.length);

  return (
    <>
      {!posts && <div class="spinner" />}
      {posts && (
        <div className="posts_container">
          {posts
            .map((_post, index) => (
              <div key={index}>
                <Post post={_post} />
              </div>
            ))
            .reverse()}
        </div>
      )}
    </>
  );
};

export default Posts;
