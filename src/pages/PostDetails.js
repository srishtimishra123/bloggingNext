

import React from 'react';


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

