import React from 'react';
import './Bookmarks.css';

const Bookmarks = ({bookmarks}) => {

    return (
        <div className='bookmarks-container'>
            <h2>Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(blog =>
                <div key={blog.id} className='bookmarks-blog'>
                    <h4>{blog.title}</h4>
                </div>
            )
            }
        </div>
    );
};

export default Bookmarks;