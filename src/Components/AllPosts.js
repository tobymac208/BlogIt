import React, { useEffect, useState } from "react";
import api from "../Server-API-Connector/BlogServerAPI";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  /** Read in all of the posts */
  useEffect(() => {
    retrievePosts();
  }, []);

  /** Read in all posts, unfiltered. */
  const retrievePosts = () => {
    api
      .get("/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  };

  /** Return all posts in a grid. */
  const enumeratePosts = posts.map((post) => {
    return (
      <div className="ui grid">
        <div className="four wide column border">
          <p>{post.title}</p>
        </div>
        <div className="four wide column border">
          <p>{post.rating}/10</p>
        </div>
        <div className="four wide column border">
          <p>{post.date}</p>
        </div>
        <div className="four wide column border">
          <p>{post.tags.join(" ")}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="four wide column">
          <h3>Title</h3>
        </div>
        <div className="four wide column">
          <h3>Rating</h3>
        </div>
        <div className="four wide column">
          <h3>Date Posted</h3>
        </div>
        <div className="four wide column">
          <h3>Tags</h3>
        </div>
      </div>
      {enumeratePosts}
    </div>
  );
};

export default AllPosts;
