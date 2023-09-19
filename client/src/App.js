import "./App.scss";
import usePostStore from "./store/post";
import { useEffect } from "react";

import Navbar from "./components/navbar";
import Posts from "./components/Posts/posts";
import Form from "./components/form";

function App() {
  const refreshPosts = usePostStore((state) => state.getPosts)();

  return (
    <>
      <Navbar />
      <div className="app_body">
        <div className="left_body">Left</div>
        <div className="main_body">
          <Form />
          <Posts />
        </div>
        <div className="right_body">Right</div>
      </div>
    </>
  );
}

export default App;
