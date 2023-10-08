import axios from "axios";

const url = "http://localhost:3002/posts";
const authUrl = "http://localhost:3002/user";

export const getPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const signIn = (authData) => axios.post(`${authUrl}/signin`, authData);
export const signUp = (authData) => axios.post(`${authUrl}/signup`, authData);
