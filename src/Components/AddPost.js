import React from 'react';

const AddPost = () => {
    return (
        <div className="ui container">
            <form class="form">
                <legend>New Post</legend>
                <input type="text" className="ui field" />
                <textarea 
                type="text" 
                className="ui field"
                name="body" />
            </form>
        </div>
    )
}

export default AddPost;
