import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetail = () => {
  const location = useLocation();
  const { project } = location.state;

  /** Just like in PostDetail, this simply separates each list item into a separate paragraph. */
  const paragraphs = project.body.map((paragraph) => {
      return <p>{paragraph}</p>;
  });

  // Separate each image into an inline block and display it.
  const gallery = project.gallery.map((image) => {
    // Enumerate through the 'gallery' object and grab the hyperlinks for the project images.
    return <img src={ image } alt="image of the project" />
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
          <div className="gallery">
            { gallery }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
