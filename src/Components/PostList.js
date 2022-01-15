import React, { useState, useEffect } from "react";
import api from "../Server-API-Connector/BlogServerAPI";
import { Link } from "react-router-dom";

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
    setPosts(response.data.slice(0, 3));
    setRatedPosts(response.data.slice(0, 3));
    // setPosts(response.data.sort(sortPostsBy("date")).slice(0, 3));
    // setRatedPosts(response.data.sort(sortPostsBy("rating")).reverse().slice(0, 3));
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
      <div key={post.id} className="ui vertical stripe segment">
        <li>
          <h3 className="ui header">{post.title}</h3>
          <p>{ post.body[0].slice(0, 250) }...</p>
          <p>{`${post.rating}/10`}</p>
          <Link to={`/detail/${post.id}`} className="ui large button primary" state={{ post: post }}>
            Read Post
          </Link>
        </li>
      </div>
    );
  });

  const enumerateRatedPosts = ratedPosts.map((post) => {
    return (
      <div key={post.id} className="ui vertical stripe segment">
        <li>
          <h3 className="ui header">{post.title}</h3>
          <p>{post.body[0].slice(0, 250)}...</p>
          <p>{`${post.rating}/10`}</p>
          <Link to={`/detail/${post.id}`} className="ui large button primary" state={{ post: post }}>
            Read Post
          </Link>
        </li>
      </div>
    );
  });

  return (
    <div className="ui main">
      <div class="ui">
        <div className="ui inverted relaxed divided list">{enumeratePosts}</div>
      </div>
      <div className="ui horizontal header divider">
        <p>Highest Rated Posts</p>
      </div>
      <div class="ui">
        <div className="ui inverted relaxed divided list">
          {enumerateRatedPosts}
        </div>
      </div>

      <div>
        <button className="ui button left">All Posts</button>
        <Link to="/add">
          <button className="ui button right primary">
            <i className="icon plus"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
