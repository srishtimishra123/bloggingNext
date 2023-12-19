import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../Header';
import Image from 'next/image';
const PostDetailPage = () => {
    const [post, setPost] = useState({});
    const [image, setImage] = useState('');
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {

            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => {
                    setPost(response.data);

                    return axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
                })
                .then(response => setImage(response.data.url))
                .catch(error => console.error('Error fetching post or image:', error));
        }
    }, [id]);

    return (
        <div>
            <Header/>
            <h3 style={{ textAlign: 'center' }} className='mt-3 mb-3'>Post Detail Page</h3>
            {post && (
                <>

                    <div className='row'>
                        <div className='col-lg-2'></div>
                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-6'>    {image && <Image src={image} alt={post.title} style={{ width: '100%' }} />}</div>
                                <div className='col-lg-6'>
                                    <h1>{post.title}</h1>
                                    <p className='mt-3'>Content <br />{post.body}</p>
                                </div>

                            </div>


                        </div>

                    </div>

                </>
            )}
        </div>


    );
};

export default PostDetailPage;
