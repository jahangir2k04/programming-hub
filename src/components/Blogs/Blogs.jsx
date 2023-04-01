import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import ReadTime from '../ReadTime/ReadTime';
import Bookmarks from '../Bookmarks/Bookmarks';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

    useEffect( ()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const addBookmarks = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        console.log(newBookmarks);
        setBookmarks(newBookmarks);
    }

    return (
        <div className='blogs-container'>

            <div className='blogs'>
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    addBookmarks={addBookmarks}
                    ></Blog>)
                }
            </div>
            <div className='bookmarks-blogs'>
                <ReadTime></ReadTime>
                <Bookmarks bookmarks={bookmarks}></Bookmarks>
            </div>

        </div>
    );
};

export default Blogs;