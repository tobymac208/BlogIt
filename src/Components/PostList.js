import React, { useState, useEffect } from "react";
import api from "../Server-API-Connector/BlogServerAPI";
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [ratedPosts, setRatedPosts] = useState([]);

  useEffect(() => {
    retrieveContacts();
  }, []);

  const retrieveContacts = async () => {
    const response = await api.get("/posts");

    // Verify data has been receieved.
    if (!response.data) {
      console.log("No data received.");
      return;
    }

    /** Sets our state to a sorted list of posts by title. */
    setPosts(response.data.sort(sortPostsBy("date")).slice(0, 3));
    setRatedPosts(response.data.sort(sortPostsBy("rating")).reverse().slice(0, 3));
  };

  /** Compares two posts by a certain target. Title, body, rating, and tags.*/
  const sortPostsBy = (target) => {
    return (a, b) => {
      if (a[target] > b[target]) return 1;
      else if (a[target] < b[target]) return -1;
      else return 0;
    };
  };

  const enumeratePosts = posts.map((post) => {
    return (
      <div key={post.id} className="item">
        <Link to={`/posts/${post.id}`}>
          <li>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{`${post.rating}/10`}</p>
          </li>
        </Link>
      </div>
    );
  });

  const enumerateRatedPosts = ratedPosts.map((post) => {
    return (
      <div key={post.id} className="ui item">
        <Link to={`/posts/${post.id}`}>
          <li>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{`${post.rating}/10`}</p>
          </li>
        </Link>
      </div>
    );
  });

  return (
    <div className="ui main">
      <div class="ui inverted segment">
        <div className="header">Recent Posts</div>
        <div className="ui inverted relaxed divided list">
          { enumeratePosts }
        </div>
      </div>
      <div class="ui inverted segment">
        <div className="header">Highest Rated Posts</div>
        <div className="ui inverted relaxed divided list">
          { enumerateRatedPosts }
        </div>
      </div>

      <div>
        <button className="ui button left">All Posts</button>
        <Link to="/add">
          <button className="ui button right primary"><i className="icon plus"></i></button>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
