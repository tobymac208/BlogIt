import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetail = () => {
  const location = useLocation();
  const { project } = location.state;

  /** Just like in PostDetail, this simply separates each lsit item into a separate paragraph. */
  const paragraphs = project.body.map((paragraph) => {
      return <p>{paragraph}</p>;
  });

  return (
    <div>
      <div className="ui">
        <a href="/projects" type="button" className="ui button primary">
          <i className="icon arrow alternate circle left"></i>
          Go Back
        </a>
        <div className="ui main text container blog">
          <img src={project.thumbnail} alt="project image" />
          <h1 className="ui header">{project.title}</h1>
          <p>{paragraphs}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
