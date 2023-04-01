import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';

const Blog = (props) => {
    console.log(props);
    const {title, cover, name, image, publish, readTime} = props.blog;

    return (
        <div className='blog'>
            <img className='cover' src={cover} alt="" />
            <div className='blog-info'>
                <div className='author-info'>
                    <img className='author-image' src={image} alt="" />
                    <div>
                        <h2>{name}</h2>
                        <p>{publish}</p>
                    </div>
                </div>
                <p className='readTime'>{readTime} min read  
                <span><FontAwesomeIcon icon={faBookmark} /></span>
                </p>
            </div>
            <h3>{title}</h3>
            <button className='btn-mark'>Mark as Read</button>
        </div>
    );
};

export default Blog;