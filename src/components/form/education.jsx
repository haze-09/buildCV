import { useState } from "react";

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

      <label htmlFor={schoolName}>School Name:</label>
      <input type="text" name={schoolName} id={schoolName} required />

      <label htmlFor={location}>Location:</label>
      <input type="text" name={location} id={location} required />

      <label htmlFor={board}>Board:</label>
      <input type="text" name={board} id={board} required />

      <label htmlFor={percentage}>Percentage:</label>
      <input type="number" name={percentage} id={percentage} required />
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
  let percentage = nameHelper("universityPercentage");

  return (
    <fieldset>
      <legend>Degree {index + 1}</legend>
      <label htmlFor={degreeName}>Degree Name:</label>
      <input type="text" name={degreeName} id={degreeName} required />

      <label htmlFor={university}>University:</label>
      <input type="text" name={university} id={university} required />

      <label htmlFor={location}>Location:</label>
      <input type="text" name={location} id={location} required />

      <label htmlFor={percentage}>Percentage:</label>
      <input type="number" name={percentage} id={percentage} required />
    </fieldset>
  );
}

function Education() {
  const [degreeCount, setDegreeCount] = useState(1);

  function addDegree() {
    setDegreeCount(degreeCount + 1);
  }

  let degreeComponents = [];

  for(let i = 0; i< degreeCount;i++){
    degreeComponents.push(<UniversityDegree key={i} index={i} />)
  }
  return (
    <fieldset>
      <legend id="educationForm">Education</legend>
      <School grade={10} />
      <School grade={12} />
      {degreeComponents}
      <button type="button" onClick={addDegree}>Add Degree</button>

    </fieldset>
  );
}

export default Education;
