import { React, useEffect } from "react";
import Post from "./post";
import usePostStore from "../../store/post";
import "../../styles/posts.scss";

const Posts = () => {
  const posts = usePostStore((state) => state.posts);
  const refreshPosts = usePostStore((state) => state.getPosts);

  useEffect(() => {
    refreshPosts();
  }, []);

  console.log(posts);
  console.log("total posts = " + posts.length);

  return !posts.length ? (
    <div class="spinner" />
  ) : (
    <div className="posts_container">
      {posts.map((_post) => (
        <Post key={_post._id} post={_post} />
      ))}
    </div>
  );

  // return (
  //   <div className="posts_container">
  //     <Post key="122" post="123" />
  //   </div>
  // );
};

export default Posts;
