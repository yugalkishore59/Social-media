import axios from "axios";

const url = "http://localhost:3002/posts";
const authUrl = "http://localhost:3002/user";

// Function to get the token from localStorage
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.token : null;
};

// common configuration for your requests with the Authorization header
const axiosConfig = axios.create({
  baseURL: url,
});

axiosConfig.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// export const getPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const getPosts = () => axiosConfig.get(url);
export const createPost = (newPost) => axiosConfig.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axiosConfig.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axiosConfig.delete(`${url}/${id}`);

export const signIn = (authData) => axios.post(`${authUrl}/signin`, authData);
export const signUp = (authData) => axios.post(`${authUrl}/signup`, authData);
