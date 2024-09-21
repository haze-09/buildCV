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

function Education() {
  return (
    <fieldset>
      <legend>Education</legend>
      <School grade={10} />
      <School grade={12} />
    </fieldset>
  );
}

export default Education;
