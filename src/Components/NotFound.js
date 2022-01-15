import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="ui vertical center aligned segment">
            <h1>404 - Not Found</h1>
            <Link to="/">Return Home, Lost Traveler</Link>
        </div>
    )
}

export default NotFound;
