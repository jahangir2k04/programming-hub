import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import ReadTime from '../ReadTime/ReadTime';
import Bookmarks from '../Bookmarks/Bookmarks';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [times, setTime] = useState([]);

    useEffect( ()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const addBookmarks = (title) => {
        const newBookmarks = [...bookmarks, title];
        setBookmarks(newBookmarks);
    }

    const addToReadTime = (readTime) => {
        const newTime = [...times, readTime]
        setTime(newTime);
    }

    return (
        <div className='blogs-container'>

            <div className='blogs'>
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    addBookmarks={addBookmarks}
                    addToReadTime={addToReadTime}
                    ></Blog>)
                }
            </div>
            <div className='bookmarks-blogs'>
                <ReadTime times={times}></ReadTime>
                <Bookmarks bookmarks={bookmarks}></Bookmarks>
            </div>

        </div>
    );
};

export default Blogs;