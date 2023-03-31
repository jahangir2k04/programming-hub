import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( ()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div className='blogs-container'>

            <div className='blogs'>
                <Blog></Blog>
            </div>
            <div className='bookmarks-blogs'>
                <h1>this is bookmarks container</h1>
            </div>

        </div>
    );
};

export default Blogs;