import React from "react";

const AddPost = () => {
  return (
    <div className="ui main">
        <div className="ui form">
            <div className="field">
                <label className="label" for="title">Headline: </label>
                <input id="title" name="title" type="text" placeholder="Headline" />
            </div>
            <div className="field">
                <label className="label" for="body">Body: </label>
                <textarea id="body" name="body" type="text" placeholder="Body" />
            </div>
            <div className="field">
                <label className="label" for="tags">Tags: </label>
                <input id="tags" name="tags" type="text" placeholder="Tags" />        
            </div>
        </div>
    </div>
  );
};

export default AddPost;
