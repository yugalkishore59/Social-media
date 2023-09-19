import React from "react";
import image from "../../assets";
import { FcLike, FcLikePlaceholder, FcComments } from "react-icons/fc";
import { AiFillEdit } from "react-icons/ai";
import "../../styles/post.scss";
import moment from "moment";

import dummyPost from "../../assets/dummy_post.jpg";

const Post = ({ key, post }) => {
  return (
    <div className="post_container">
      <div className="post_info">
        <div className="post_user_details">
          <img src={image.userLogo} alt="user_logo" />
          <span className="post_user">
            @username<span>7 days ago</span>
          </span>
        </div>
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <AiFillEdit size={20} />
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Edit
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "red" }}>
              Delete
            </a>
          </li>
        </ul>
      </div>

      <div className="post_body">
        <div className="post_title">Very happy birthday!</div>
        <div className="post_media">
          <img src={dummyPost} />
        </div>
        <div className="post_message">
          A wish for you on your birthday, whatever you ask may you receive,
          whatever you seek may you find, whatever you wish may it be fulfilled
          on your birthday and always. Happy birthday!
        </div>
      </div>
      <div className="post_reaction_container">
        <div className="post_reaction">
          <FcLikePlaceholder size={40} />
          <FcComments size={40} />
        </div>
        <span>50 likes · 10 comments</span>
      </div>
    </div>
  );
};

export default Post;
