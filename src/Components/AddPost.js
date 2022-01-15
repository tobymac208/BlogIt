import React, { useState } from "react";
import api from '../Server-API-Connector/BlogServerAPI';
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState([]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const createPost = (e) => {
      e.preventDefault();

      /** Attempt to create a new blog post with the given details.
       * Data: title, body, date, rating, tags
       */
      if(title.trim().length < 1 || body.trim().length < 1 || tags.trim().length < 1){
          document.getElementById('errorLabel').textContent = "Must provide: 1) title 2) body 3) tags";
          return;
      }
      // get current date
      const today = new Date();
      const date = today.toJSON().slice(0, 10);
      const formattedDate = `${date.slice(0, 4)}-${date.slice(5, 7)}-${date.slice(8, 10)}`;

      // Add the new blog post.
      api.post('/posts', { id: uuid(), title, body : [body], tags : tags.trim().split(' '), date: formattedDate, rating : 7 })
      .then((response) => {
          console.log(response);
      })
      .catch((error) => {
          console.log(`Error creating new post: ${error.message}`);
          return;
      });

      navigate('/');
  };

  return (
    <div className="ui main">
      <div className="ui form">
        <div className="field">
          <label className="label" for="title">
            Headline:{" "}
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Headline"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label className="label" for="body">
            Body:{" "}
          </label>
          <textarea sid="body" name="body" type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} required/>
        </div>
        <div className="field">
          <label className="label" for="tags">
            Tags:{" "}
          </label>
          <input id="tags" name="tags" type="text" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} required/>
        </div>
        <div className="field">
            <a className="ui button primary" onClick={ (e) => createPost(e) } type="button">Create</a>
            <a className="ui button red" href="/">Cancel</a>
        </div>
        <div className="field">
            <label id="errorLabel" className="ui label red">No errors.</label>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
