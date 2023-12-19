'use client'


import { useState } from 'react';
import Header from './Header';



const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [errors, setErrors] = useState({});
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (errors.title) {
      setErrors((prevErrors) => ({ ...prevErrors, title: '' }));
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    if (errors.content) {
      setErrors((prevErrors) => ({ ...prevErrors, content: '' }));
    }
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
    if (errors.author) {
      setErrors((prevErrors) => ({ ...prevErrors, author: '' }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
  
    // Simple validation
    if (!title.trim()) {
      errors.title = 'Title is required';
    }
    if (!content.trim()) {
      errors.content = 'Content is required';
    }
    if (!author.trim()) {
      errors.author = 'Author name is required';
    }
  
    if (Object.keys(errors).length === 0) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, author }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('New post created:', data.post);
        setTitle('');
        setContent('');
        setAuthor('');      } else {
        const errorData = await response.json();
        console.error('Failed to create post:', errorData.message);
        // Handle error (e.g., show an error message)
      }
    } else {
      setErrors(errors);
    }
  };
  

  return (
    <div>
      <Header/>
      <div className='row p-4'>
<div className='col-lg-4'></div>


<div className='col-lg-4 mt-5 border ' style={{ borderRadius: '10px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
        <div className='row'>
            <div className='col-lg-12 ves' style={{ borderRadius: '10px' }}>
              <div className='' style={{ height: '100px' }}>
                <div>
                  <center>
                    <h3 className='p-2' style={{ fontSize: '1.25rem', marginTop: '50px' }}>
                      Blog Post Form
                    </h3>
                   
                  </center>
                </div>
              </div>
            </div>
          </div>
      <form onSubmit={handleSubmit} className=''>
        <div>
          <label className='mt-1'>Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className='w-100 p-1'
            style={{border:'1px solid black',borderRadius:'2px'}}
          />
          {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
        </div>
        <div>
          <label className='mt-2'>Content</label>
          <textarea
            value={content}
            onChange={handleContentChange}
            className='w-100 p-5'
            style={{border:'1px solid black',borderRadius:'2px'}}

          />
          {errors.content && <span style={{ color: 'red' }}>{errors.content}</span>}
        </div>
        <div>
          <label className='mt-2'>Author</label>
          <input
            type="text"
            value={author}
            onChange={handleAuthorChange}
            className='w-100 p-1'
            style={{border:'1px solid black',borderRadius:'2px'}}

          />
          {errors.author && <span style={{ color: 'red' }}>{errors.author}</span>}
        </div>
        <button type="submit"  onClick={handleSubmit}
         className='w-100 p-2 text-white bg-dark mt-4 mb-5' style={{border:'1px solid black',borderRadius:'5px'}}>Create Post</button>
      </form>
        </div>

      </div>
   
     
    </div>
  );
};

export default CreatePost;
