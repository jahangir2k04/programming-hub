import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import ReadTime from '../ReadTime/ReadTime';
import Bookmarks from '../Bookmarks/Bookmarks';

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
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    ></Blog>)
                }
            </div>
            <div className='bookmarks-blogs'>
                <ReadTime></ReadTime>
                <Bookmarks></Bookmarks>
            </div>

        </div>
    );
};

export default Blogs;