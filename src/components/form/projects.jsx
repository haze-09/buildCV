import { useState } from "react";
import { Duration } from "./utils";

function Proj({ setFormData, formData, index }) {
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      experience: prevState.projects.map((project, i) => {
        return i === index ? { ...project, [name]: value } : project;
      }),
    }));
  }

  function nameHelper(name) {
    return name + index;
  }

  let name = nameHelper("projName");
  let stack = nameHelper("stack");
  let desc = nameHelper("projDesc");

  return (
    <fieldset>
      <legend>Project {index + 1}</legend>

      <div className="twoCol">
        <label htmlFor={name}>Name :</label>
        <input
          type="text"
          name="name"
          id={name}
          value={formData.projects[index].name || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor={stack}>Stack :</label>
        <input
          type="text"
          name="stack"
          id={stack}
          placeholder="eg format: HTML, CSS, JS "
          value={formData.projects[index].stack || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor={desc}>Description :</label>
        <textarea
          name="desc"
          id={desc}
          value={formData.projects[index].desc || ""}
          onChange={handleChange}
          required
        ></textarea>
      </div>
    </fieldset>
  );
}

function Projects({ setFormData, formData }) {
  function addProj() {
    setFormData((prevState) => ({
      ...prevState,
      projects: [
        ...prevState.projects,
        { [`project${prevState.projects.length + 1}`]: {} },
      ],
    }));
  }

  function removeProj() {
    setFormData((prevState) => ({
      ...prevState,
      projects: prevState.projects.slice(0, -1),
    }));
  }

  return (
    <fieldset>
      <legend>Projects:</legend>
      {formData.projects.map((_, index) => (
        <Proj
          setFormData={setFormData}
          formData={formData}
          key={index}
          index={index}
        />
      ))}
      <div className="buttons">
        <button type="button" onClick={addProj}>
          Add Project
        </button>
        {formData.projects.length > 1 && (
          <button type="button" onClick={removeProj}>
            Remove Project
          </button>
        )}
      </div>
    </fieldset>
  );
}

export default Projects;
