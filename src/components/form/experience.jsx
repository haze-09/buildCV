import { useState } from "react";
import { Duration } from "./utils";

function Job({ setFormData, formData, index }) {
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      experience: prevState.experience.map((job, i) => {
        return i === index ? { ...job, [name]: value } : job;
      }),
    }));
  }

  function nameHelper(name) {
    return name + index;
  }
  let role = nameHelper("role");
  let org = nameHelper("organization");
  let location = nameHelper("jobLocation");
  let desc = nameHelper("jobDesc");
  let duration = {
    start: nameHelper("jobDuration") + "Start",
    end: nameHelper("jobDuration") + "end",
  };

  return (
    <fieldset>
      <legend>Job {index + 1}</legend>

      <div className="twoCol">
        <label htmlFor={role}>Role :</label>
        <input
          type="text"
          name="role"
          id={role}
          value={formData.experience[index].role || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor={org}>Organization :</label>
        <input
          type="text"
          name="org"
          id={org}
          value={formData.experience[index].org || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor={location}>Location :</label>
        <input
          type="text"
          name="location"
          id={location}
          value={formData.experience[index].location || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor={desc}>Description :</label>
        <textarea
          name="desc"
          id={desc}
          value={formData.experience[index].desc || ""}
          onChange={handleChange}
          required
        ></textarea>
        <Duration
          duration={duration}
          handleChange={handleChange}
          formData={formData}
          index={index}
          section={"experience"}
        />
      </div>
    </fieldset>
  );
}

function Experience({ setFormData, formData }) {
  function addJob() {
    setFormData((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        { [`job${prevState.experience.length + 1}`]: {} },
      ],
    }));
  }

  function removeJob() {
    setFormData((prevState) => ({
      ...prevState,
      experience: prevState.experience.slice(0, -1),
    }));
  }

  return (
    <fieldset>
      <legend>Experience</legend>
      {formData.experience.map((_, index) => (
        <Job
          setFormData={setFormData}
          formData={formData}
          key={index}
          index={index}
        />
      ))}
      <div className="buttons">
        <button type="button" onClick={addJob}>
          Add Job
        </button>
        {formData.experience.length > 1 && (
          <button type="button" onClick={removeJob}>
            Remove Job
          </button>
        )}
      </div>
    </fieldset>
  );
}

export default Experience;
