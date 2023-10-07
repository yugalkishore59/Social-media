import React from "react";

import Posts from "./Posts/posts";
import Form from "./form";
import usePostStore from "../store/post";

function Home() {
  const refreshPosts = usePostStore((state) => state.getPosts)();
  return (
    <div>
      <div className="app_body">
        <div className="left_body">Left</div>
        <div className="main_body">
          <Form />
          <Posts />
        </div>
        <div className="right_body">Right</div>
      </div>
    </div>
  );
}

export default Home;
