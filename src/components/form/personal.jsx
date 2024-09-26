function Personal({ setFormData, formData }) {
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  }

  return (
    <fieldset>
      <legend> Personal Info:</legend>

      <div className="twoCol">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          value={formData.personalInfo.name || ""}
          onChange={handleChange}
        />
        <label htmlFor="phoneNumber"> Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          pattern="^\d{10}$"
          autoComplete="tel"
          value={formData.personalInfo.phoneNumber || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          value={formData.personalInfo.email || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor="linkedIn">LinkedIn page URL:</label>
        <input
          type="text"
          name="linkedIn"
          id="linkedIn"
          value={formData.personalInfo.linkedIn || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor="github">Github page URL:</label>
        <input
          type="text"
          name="github"
          id="github"
          value={formData.personalInfo.github || ""}
          onChange={handleChange}
          required
        />
      </div>
    </fieldset>
  );
}

export default Personal;
