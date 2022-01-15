import React from "react";
import { useLocation } from "react-router-dom";

const PostDetail = (props) => {
  const location = useLocation();
  const { post } = location.state;

  const tags = post.tags.map(tag =>{
      return(
          <div className="ui item">
              <p><a href="">{tag}</a> <i className="icon tag" /></p>
          </div>
      );
  });

  return (
    <div>
      <div className="ui main text container">
        <h1 className="ui header">{post.title}</h1>
      </div>
      <div className="ui text container">
          <p>{ post.body }</p>
      </div>
      <div className="ui text container">
          { tags } 
      </div>
    </div>
  );
};

export default PostDetail;
