import { useState } from "react";
import Output from "./output";
import Form from "./form";

function Content() {
  const [state, setState] = useState("form");
  const [formData, setFormData] = useState({
    personalInfo: {},
    education: {
      school: { class10: {}, class12: {} },
      university: [{ degree1: {} }],
    },
    experience: [{ Job1: {} }],
    projects: {},
    skills: {},
  });

  function handleSubmit(e) {
    e.preventDefault();
    setState("output");
  }

  function handleEdit() {}

  return state === "form" ? (
    <Form
      setFormData={setFormData}
      formData={formData}
      handleSubmit={handleSubmit}
    />
  ) : (
    <Output formData={formData} />
  );
}

export default Content;
