import React from 'react'
import Post from './post'
import UsePostStore from '../../store/post'

const posts = () => {
  const posts = UsePostStore((state) => state.posts);
  console.log(posts);

  return (
    <>
        <h4>posts</h4>
        <Post/>
    </>
    
  )
}

export default posts