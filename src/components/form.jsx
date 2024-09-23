import Personal from "./form/personal";
import Education from "./form/education";
import Experience from "./form/experience";

function Form() {
  return (
    <form action="">
      <Personal />
      <Education />
      <Experience />
      <button type="submit">Build</button>
    </form>
  );
}

export default Form;
