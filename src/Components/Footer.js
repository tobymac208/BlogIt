import React from 'react';

const Footer = () => {
    return (
    <div className="ui menu">
        <div className='ui container center'>
            <p>BlogIt &copy; {new Date().getFullYear()} Created by Niklas Fernandez</p>
        </div>
    </div>
    );
};

export default Footer;
