import { React, useEffect } from "react";
import { useState } from "react";
import FileBase from "react-file-base64";
import "../styles/form.scss";
import usePostStore from "../store/post";

const Form = () => {
  const isEdit = usePostStore((state) => state.isEdit);
  const editId = usePostStore((state) => state.editId);
  const updatePost = usePostStore((state) => state.updatePost);
  const toggleIsEdit = usePostStore((state) => state.toggleIsEdit);
  const createPost = usePostStore((state) => state.createPost);
  const posts = usePostStore((state) => state.posts);

  const [postData, setPostData] = useState({
    author: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    createdAt: new Date(),
  });

  useEffect(() => {
    if (isEdit) {
      const data = posts.find((p) => p._id === editId);
      setPostData(data); // Removed { data }
      console.log("editing", data);
    }
  }, [isEdit, editId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      updatePost(editId, postData);
      toggleIsEdit(false);
    } else {
      setPostData((prevData) => ({
        ...prevData,
        createdAt: new Date(),
      }));
      createPost(postData);
    }

    setPostData({
      author: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      createdAt: new Date(),
    });
  };

  const handleClear = () => {
    setPostData({
      author: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <div className="form_container">
      <div className="form_heading">
        {isEdit ? "Edit post" : "Create new post"}
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            value={postData.author}
            onChange={(e) =>
              setPostData({ ...postData, author: e.target.value })
            }
            required
          />
        </div>

        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="form-control"
            placeholder="Caption"
            aria-describedby="addon-wrapping"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            required
          />
        </div>

        <div className="input-group">
          <textarea
            maxLength="400"
            className="form-control"
            placeholder="What's on your mind?"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            required
          ></textarea>
        </div>

        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="form-control"
            placeholder="Tags"
            aria-describedby="addon-wrapping"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
        </div>

        <div className="input_file_container">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="button_container">
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
          <button className="btn btn-success" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
