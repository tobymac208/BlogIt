import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='ui fixed menu'>
            <div className='ui container center'>
                <Link className='link' to="/">
                    <h1>Blog It</h1>
                </Link>
            </div>
        </div>
    );
};

export default Header;
