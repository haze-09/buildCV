function Skills({ setFormData, formData }) {

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      skills: {
        ...prevState.skills,
        [name]: value,
      },
    }));
  }

  return (
    <fieldset>
      <legend>Skills:</legend>

      <div className="twoCol">
        <label htmlFor="languages">Languages:</label>
        <input
          type="text"
          name="languages"
          id="languages"
          placeholder="eg format: HTML, CSS, JS "
          value={formData.skills.languages || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor="frameworks">Frameworks:</label>
        <input
          type="text"
          name="frameworks"
          id="frameworks"
          placeholder="eg format: React, Node"
          value={formData.skills.frameworks || ""}
          onChange={handleChange}
        />
        <label htmlFor="devTools">DevTools:</label>
        <input
          type="text"
          name="devTools"
          id="devTools"
          placeholder="eg format: Git, VS Code "
          value={formData.skills.devTools || ""}
          onChange={handleChange}
        />
        <label htmlFor="libraries">Libraries:</label>
        <input
          type="text"
          name="libraries"
          id="libraries"
          placeholder="eg format: Pandas, Numpy "
          value={formData.skills.libraries || ""}
          onChange={handleChange}
        />
      </div>
    </fieldset>
  );
}

export default Skills;
