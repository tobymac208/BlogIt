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

    const printThisManyPosts = 3;

    /** Sets our state to a sorted list of posts by title. */
    setPosts(
      response.data
        .sort(sortPostsBy("date"))
        .reverse()
        .slice(0, printThisManyPosts)
    );
    setRatedPosts(
      response.data
        .sort(sortPostsBy("rating"))
        .reverse()
        .slice(0, printThisManyPosts)
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
      <div key={post.id} className="ui vertical stripe segment">
        <li>
          <h3 className="ui header">{post.title}</h3>
          <p>{post.body[0].slice(0, 250)}...</p>
          <p>{`${post.rating}/10`}</p>
          <Link
            to={`/detail/${post.id}`}
            className="ui large button primary"
            state={{ post: post }}
          >
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
          <Link
            to={`/detail/${post.id}`}
            className="ui large button primary"
            state={{ post }}
          >
            Read Post
          </Link>
        </li>
      </div>
    );
  });

  return (
    <div className="ui">
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted header">BlogIt</h1>
          <h2>Where porfolio and blog meet.</h2>
        </div>
      </div>
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
        <a href="/posts" type="button" className="ui button left secondary">
          All Posts
        </a>
        <a href="/add" className="ui button right secondary">
          <i className="icon plus"></i>
        </a>
      </div>
    </div>
  );
};

export default BlogList;
