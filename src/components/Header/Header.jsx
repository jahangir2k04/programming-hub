import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h3>Programming Hub</h3>
            <div className='header-item'>
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
                <a href="/Login">Login</a>
                <img src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs=" alt="" />
            </div>
        </nav>
    );
};

export default Header;