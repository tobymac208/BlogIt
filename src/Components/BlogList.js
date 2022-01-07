import React, { useState, useEffect } from "react";
import api from '../Server-API-Connector/BlogServerAPI';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    retrieveContacts();
  }, []);

  const retrieveContacts = async () => {
    const response = await api.get("/posts");

    // Verify data has been receieved.
    if(response.data) {
      for(let i = 0, length = response.data.length; i < length; i++)
        console.log(`Here is it! ${response.data[i].id}`);
    }else {
      console.log("No data received.");
      return;
    }

    /** Sets our state to a sorted list of posts by title. */
    setPosts(response.data.sort(sortPostsBy("title")));
  };

  const enumeratePosts = (posts).map((post) => {
    return (
      <div className="ui item">
        <li>{post.title}</li>
      </div>
    );
  });

  /** Compares two posts by a certain target. Title, body, rating, and tags.*/
  const sortPostsBy = (target) => {
    (a, b) => {
      if(a[target] > b[target])
        return 1;
      else if(a[target] < b[target])
        return -1;
      else
        return 0;
    }
  }

  return (
    <div className="main container">
      <button>Press me!</button>
      <h2>Newest posts</h2>
      <ol className="ui celled list">
        { enumeratePosts }
      </ol>

      <h2>Highest rated posts</h2>
      <ol className="ui celled list">
        { enumeratePosts }
      </ol>
    </div>
  );
};

export default BlogList;
