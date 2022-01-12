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
    setPosts(response.data.sort(sortPostsBy("date")).slice(0, 5));
    setRatedPosts(
      response.data.sort(sortPostsBy("rating")).reverse().slice(0, 5)
    );
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
      <div key={post.id} className="ui item">
        <Link to={`/posts/${post.id}`}>
          <li>
            <p>{post.title}</p>
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
            <p>{post.title}</p>
            <p>{post.body}</p>
            <p>{`${post.rating}/10`}</p>
          </li>
        </Link>
      </div>
    );
  });

  return (
    <div className="main container">
      <div>
        <button className="ui button left">All Posts</button>
        <button className="ui button right">
          Add Post
          <i className="icon plus"></i>
        </button>
      </div>
      <div className="ui">
        <h2>Newest posts</h2>
        <ol className="ui celled list">{enumeratePosts}</ol>
      </div>
      <hr />
      <div className="ui">
        <h2>Highest Rated Posts</h2>
        <ol className="ui celled list">{enumerateRatedPosts}</ol>
      </div>
    </div>
  );
};

export default BlogList;
