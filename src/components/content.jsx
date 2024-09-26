import { useState, useEffect } from "react";
import Output from "./output";
import Form from "./form";

function Content() {
  const [state, setState] = useState("form");

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          personalInfo: {},
          education: {
            school: { class10: {}, class12: {} },
            university: [{ degree1: {} }],
          },
          experience: [{ Job1: {} }],
          projects: [{ project1: {} }],
          skills: {},
        };
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();
    setState("output");
  }

  function handleEdit() {
    setState("form");
  }

  return state === "form" ? (
    <Form
      setFormData={setFormData}
      formData={formData}
      handleSubmit={handleSubmit}
    />
  ) : (
    <Output formData={formData} handleEdit={handleEdit} />
  );
}

export default Content;
