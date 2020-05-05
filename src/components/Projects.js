import React from "react";
import PROJECT from "../data/project";
const Project = (props) => {
  const {
    title,

    description,
    image,
    link,
  } = props.project;
  return (
    <div style={{ display: "inline-block", margin: 10, width: 300 }}>
      <h3>{title}</h3>
      <img alt="projects" src={image} style={{ height: 100, width: 110 }} />

      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  );
};

const Projects = () => (
  <div>
    <h1>Highlighted Project</h1>
    <div>
      {PROJECT.map((PROJECT) => (
        <Project key={PROJECT.id} project={PROJECT} />
      ))}
    </div>
  </div>
);

export default Projects;
