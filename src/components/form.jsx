import Personal from "./form/personal";
import Education from "./form/education";
import Experience from "./form/experience";
import Projects from "./form/projects";
import Skills from "./form/skills";
import "../styles/form.css";

function Form({ setFormData, formData, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Personal setFormData={setFormData} formData={formData} />
      <Education setFormData={setFormData} formData={formData} />
      <Experience setFormData={setFormData} formData={formData} />
      <Projects setFormData={setFormData} formData={formData} />
      <Skills setFormData={setFormData} formData={formData} />
      <div className="buttons">
        <button type="submit">Build</button>
      </div>
    </form>
  );
}

export default Form;
