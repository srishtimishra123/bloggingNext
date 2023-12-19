'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // Number of posts per page

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => {
        console.error(error);
        setError('Failed to load posts. Please try again later.');
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='row mb-5'>
        <div className='col-lg-1'></div>
        <div className='col-lg-10'>
          <div className='row p-3'>
            <h3 className='mt-3 mb-3' style={{ textAlign: 'center' }}>
              Our Blog Posts!
            </h3>
            {currentPosts.map((post) => (
              <div className='col-lg-4' key={post.id}> 
              
                <div className="m-1 p-2 res" style={{ border: '1px solid black',borderRadius:'5px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',height:'200px' }}>
                <Link href={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <h2 style={{ fontSize: '22px',color:'white' }}>
                    {post.title}
                  </h2>
                  <div className="card_text">
                    <p className='mt-3 text-white'>
                      {post.body}
                    </p>
                  </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className='pagination'>
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

