import React from 'react';
import './Bookmarks.css';

const Bookmarks = ({bookmarks}) => {

    return (
        <div className='bookmarks-container'>
            <h2>Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(title =>
                <div key={title} className='bookmarks-blog'>
                    <h4>{title}</h4>
                </div>
            )
            }
        </div>
    );
};

export default Bookmarks;