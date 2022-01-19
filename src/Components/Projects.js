import React, { useEffect, useState } from "react";
import api from "../Server-API-Connector/BlogServerAPI";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    retrieveProjects();
  }, []);

  const retrieveProjects = () => {
    api
      .get("/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
  };

  const enumerateProjects = projects.map((project) => {
    return (
      <div key={project.id} className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <h3 className="ui header">{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="six wide right floated column">
              <img
                src={project.thumbnail}
                className="ui large bordered round image"
                alt="project image"
              />
            </div>
          </div>
          <div className="row">
            <div className="center aligned column">
              {/* TODO: Add project id functionality for this. */}
              <Link
                to={`/project/${project.id}`}
                className="ui large button green"
                state={{ project }}
              >
                Read Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="ui">{enumerateProjects}</div>;
};

export default Projects;
