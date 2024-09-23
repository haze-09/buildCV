import { useState } from "react";
import { Duration } from "./utils";

function Proj({ index }) {
  function nameHelper(name) {
    return name + index;
  }

  let name = nameHelper("projName");
  let stack = nameHelper("stack");
  let desc = nameHelper("projDesc");

  return (
    <fieldset>
      <legend>Job {index + 1}</legend>

      <label htmlFor={name}>Name :</label>
      <input type="text" name={name} id={name} required />

      <label htmlFor={stack}>Stack :</label>
      <input type="text" name={stack} id={stack} placeholder="eg format: HTML, CSS, JS " required />

      <label htmlFor={desc}>Description :</label>
      <textarea name={desc} id={desc} required></textarea>
    </fieldset>
  );
}

function Projects() {
  const [projects, setProjects] = useState([0]);

  function addProj() {
    setProjects([...projects, projects.length]);
  }

  function removeProj() {
    setProjects(projects.slice(0, -1));
  }

  return (
    <fieldset>
      <legend>Projects:</legend>
      {projects.map((_, index) => (
        <Proj key={index} index={index} />
      ))}
      <button type="button" onClick={addProj}>
        Add Project
      </button>

      {projects.length > 1 && (
        <button type="button" onClick={removeProj}>
          Remove Project
        </button>
      )}
    </fieldset>
  );
}

export default Projects;
