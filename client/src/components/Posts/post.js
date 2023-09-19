import React from "react";
import image from "../../assets";
import { FcLike, FcLikePlaceholder, FcComments } from "react-icons/fc";
import { AiFillEdit } from "react-icons/ai";
import "../../styles/post.scss";
import moment from "moment";
import usePostStore from "../../store/post";

const Post = ({ post }) => {
  const deletePost = usePostStore((state) => state.deletePost);
  const editPost = usePostStore((state) => state.toggleIsEdit);

  function handleDelete() {
    deletePost(post._id);
  }
  function handleEdit() {
    editPost(true, post._id);
  }

  return (
    <div className="post_container">
      <div className="post_info">
        <div className="post_user_details">
          <img src={image.userLogo} alt="user_logo" />
          <span className="post_user">
            {post?.author}
            <span>{moment(post?.createdAt).fromNow()}</span>
          </span>
        </div>
        <a
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <AiFillEdit size={20} />
        </a>
        <ul className="dropdown-menu">
          <li>
            <div className="dropdown-item" onClick={handleEdit}>
              Edit
            </div>
          </li>
          <li>
            <div
              className="dropdown-item"
              onClick={handleDelete}
              style={{ color: "red" }}
            >
              Delete
            </div>
          </li>
        </ul>
      </div>

      <div className="post_body">
        <div className="post_title">{post?.title}</div>
        <div className="post_media">
          <img src={post?.selectedFile} />
        </div>
        <div className="post_message">{post?.message}</div>
      </div>
      {post?.tags != "" && (
        <div className="hash_tags">
          {post?.tags.toString().replace(/\b(\w+)/g, "#$1")}
        </div>
      )}

      <hr />
      <div className="post_reaction_container">
        <div className="post_reaction">
          <FcLikePlaceholder size={30} />
          <FcComments size={30} />
          <span>{post?.likeCount} likes · 10 comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
