import axios from 'axios'

const url = 'http://localhost:3002/posts';

export const fetchPosts = ()=> axios.get(url);