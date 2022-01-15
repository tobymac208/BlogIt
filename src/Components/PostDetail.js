import React, { useState, useEffect } from "react";
import BlogServerAPI from '../Server-API-Connector/BlogServerAPI';
import { useLocation } from "react-router-dom";

const PostDetail = (props) => {
  const location = useLocation();

  /** Query the JSON server for this post. */
  const { post } = location.state;

  const tags = post.tags.map((tag) => {
    return (
      <div className="ui item">
        <p>
          <a href="">{tag}</a> <i className="icon tag" />
        </p>
      </div>
    );
  });

  const paragraphs = post.body.map((paragraph) => {
    return <p>{paragraph}</p>;
  });

  return (
    <div>
      <div className="ui main text container blog">
        <h1 className="ui header">{post.title}</h1>
        {paragraphs}
      </div>

      <div className="ui text container border">
        <div className="ui">
          <p>{tags}</p>
          <p>Rating: {post.rating}/10</p>
          <p>Date Written: {post.date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
