

import React from 'react';
import posts from './PostData'; // Check the correct path to PostData

const PostDetail = ({ post }) => {
  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Author: {post.author}</p>
      <p>{post.content}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const postId = context.params.postId;
  const post = posts.find((post) => post.id === postId);

  return {
    props: {
      post,
    },
  };
}

export default PostDetail;

