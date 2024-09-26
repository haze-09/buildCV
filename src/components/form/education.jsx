import { useState } from "react";
import { Duration } from "./utils";

function School({ grade, setFormData, formData }) {
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        school: {
          class10:
            grade === 10
              ? {
                  ...prevState.education.school.class10,
                  [name]: value,
                }
              : prevState.education.school.class10,

          class12:
            grade === 12
              ? {
                  ...prevState.education.school.class12,
                  [name]: value,
                }
              : prevState.education.school.class12,
        },
      },
    }));
  }
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
        <input
          type="text"
          name="schoolName"
          id={schoolName}
          value={
            grade === 10
              ? formData.education.school.class10.schoolName || ""
              : formData.education.school.class12.schoolName || ""
          }
          onChange={handleChange}
          required
        />
        <label htmlFor={location}>Location:</label>
        <input
          type="text"
          name="location"
          id={location}
          value={
            grade === 10
              ? formData.education.school.class10.location || ""
              : formData.education.school.class12.location || ""
          }
          onChange={handleChange}
          required
        />
        <label htmlFor={board}>Board:</label>
        <input
          type="text"
          name="board"
          id={board}
          value={
            grade === 10
              ? formData.education.school.class10.board || ""
              : formData.education.school.class12.board || ""
          }
          onChange={handleChange}
          required
        />
        <label htmlFor={percentage}>Percentage:</label>
        <input
          type="number"
          name="percentage"
          id={percentage}
          value={
            grade === 10
              ? formData.education.school.class10.percentage || ""
              : formData.education.school.class12.percentage || ""
          }
          onChange={handleChange}
          required
        />
      </div>
    </fieldset>
  );
}

function UniversityDegree({ setFormData, formData, index }) {
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        university: prevState.education.university.map((degree, i) => {
          return i === index ? { ...degree, [name]: value } : degree;
        }),
      },
    }));
  }

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
        <input
          type="text"
          name="name"
          id={degreeName}
          value={formData.education.university[index].name || ""}
          onChange={handleChange}
          required
        />

        <label htmlFor={university}>University:</label>
        <input
          type="text"
          name="university"
          id={university}
          value={formData.education.university[index].university || ""}
          onChange={handleChange}
          required
        />

        <label htmlFor={location}>Location:</label>
        <input
          type="text"
          name="location"
          id={location}
          value={formData.education.university[index].location || ""}
          onChange={handleChange}
          required
        />

        <Duration
          duration={duration}
          handleChange={handleChange}
          formData={formData}
          index={index}
          section={"education"}
        />
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
      <School grade={10} setFormData={setFormData} formData={formData} />
      <School grade={12} setFormData={setFormData} formData={formData} />

      {formData.education.university.map((_, index) => (
        <UniversityDegree
          setFormData={setFormData}
          formData={formData}
          key={index}
          index={index}
        />
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
