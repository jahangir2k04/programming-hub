import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        let newBookmarks = [];
        // const exists = bookmarks.find(ttl => ttl === title);
        if(!bookmarks.includes(title)){
            newBookmarks = [...bookmarks, title];
        }
        else{
            toast("Wow so easy!");
            newBookmarks = [...bookmarks];
        }
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
                <ToastContainer />
            </div>

        </div>
    );
};

export default Blogs;