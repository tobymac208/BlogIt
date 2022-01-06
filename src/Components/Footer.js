import React from 'react';

const Footer = () => {
    return (
    <div className="ui menu">
        <div className='ui container center'>
            <p>BlogIt &copy; {new Date().getFullYear()}</p>
        </div>
    </div>
    );
};

export default Footer;