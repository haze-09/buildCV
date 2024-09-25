import { useState } from "react";
import { Duration } from "./utils";

function School({ grade }) {
  function nameHelper(name) {
    return name + grade;
  }

  let schoolName = nameHelper("schoolName");
  let location = nameHelper("location");
  let board = nameHelper("board");
  let percentage = nameHelper("percentage");

  return (
    <fieldset>
      <legend>Class {grade}</legend>

      <div className="twoCol">
        <label htmlFor={schoolName}>School Name:</label>
        <input type="text" name={schoolName} id={schoolName} required />
        <label htmlFor={location}>Location:</label>
        <input type="text" name={location} id={location} required />
        <label htmlFor={board}>Board:</label>
        <input type="text" name={board} id={board} required />
        <label htmlFor={percentage}>Percentage:</label>
        <input type="number" name={percentage} id={percentage} required />
      </div>
    </fieldset>
  );
}

function UniversityDegree({ index }) {
  function nameHelper(name) {
    return name + index;
  }

  let degreeName = nameHelper("degreeName");
  let university = nameHelper("university");
  let location = nameHelper("universityLocation");
  let duration = {
    start: nameHelper("universityDuration") + "Start",
    end: nameHelper("universityDuration") + "end",
  };

  return (
    <fieldset>
      <legend>Degree {index + 1}</legend>
      <div className="twoCol">
        <label htmlFor={degreeName}>Degree Name:</label>
        <input type="text" name={degreeName} id={degreeName} required />
        <label htmlFor={university}>University:</label>
        <input type="text" name={university} id={university} required />
        <label htmlFor={location}>Location:</label>
        <input type="text" name={location} id={location} required />
        <Duration duration={duration} />
      </div>
    </fieldset>
  );
}

function Education({ setFormData, formData }) {
  function addDegree() {
    setFormData((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        university: [
          ...prevState.education.university,
          { [`degree${prevState.education.university.length + 1}`]: {} },
        ],
      },
    }));
  }

  function removeDegree() {
    setFormData((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        university: prevState.education.university.slice(0, -1),
      },
    }));
  }

  return (
    <fieldset>
      <legend id="educationForm">Education:</legend>
      <School grade={10} />
      <School grade={12} />

      {formData.education.university.map((_, index) => (
        <UniversityDegree key={index} index={index} />
      ))}

      <div className="buttons">
        <button type="button" onClick={addDegree}>
          Add Degree
        </button>

        {formData.education.university.length > 0 && (
          <button type="button" onClick={removeDegree}>
            Remove Degree
          </button>
        )}
      </div>
    </fieldset>
  );
}

export default Education;
