function Personal() {
  return (
    <fieldset>
      <legend> Personal Info</legend>

      <label htmlFor="phoneNumber"> Phone Number:</label>
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        pattern="^\d{10}$"
        autoComplete="tel"
        required
      />

      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        required
      />

      <label htmlFor="linkedIn">LinkedIn page URL:</label>
      <input type="text" name="linkedIn" id="linkedIn" required />

      <label htmlFor="github">Github page URL:</label>
      <input type="text" name="github" id="github" required />
    </fieldset>
  );
}

export default Personal;
