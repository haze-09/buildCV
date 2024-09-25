import Personal from "./form/personal";
import Education from "./form/education";
import Experience from "./form/experience";
import Projects from "./form/projects";
import Skills from "./form/skills";
import "../styles/form.css";

function Form() {
  return (
    <form action="">
      <Personal />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <div className="buttons">
        <button type="submit">Build</button>
      </div>
    </form>
  );
}

export default Form;
