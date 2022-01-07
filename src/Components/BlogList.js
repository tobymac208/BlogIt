import React, { useState, useEffect } from "react";
import api from '../Server-API-Connector/BlogServerAPI';
import { v4 as uuid } from 'uuid';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    retrieveContacts();
  }, []);

  const retrieveContacts = async () => {
    const response = await api.get("/posts");

    // Verify data has been receieved.
    if(!response.data) {
      console.log("No data received.");
      return;
    }

    /** Sets our state to a sorted list of posts by title. */
    setPosts(response.data.sort(sortPostsBy("title")));
  };

  /** Compares two posts by a certain target. Title, body, rating, and tags.*/
  const sortPostsBy = (target) => {
    return (a, b) => {
      if(a[target] > b[target])
        return 1;
      else if(a[target] < b[target])
        return -1;
      else
        return 0;
    }
  }

  const enumeratePosts = (posts).map((post) => {
    return (
      <div key={post.id} className="ui item">
        <li>{post.title}</li>
      </div>
    );
  });

  return (
    <div className="main container">
      <h2>Newest posts</h2>
      <ol className="ui celled list">
        { enumeratePosts }
      </ol>
    </div>
  );
};

export default BlogList;
