function Skills() {
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
          required
        />
        <label htmlFor="frameworks">Frameworks:</label>
        <input
          type="text"
          name="frameworks"
          id="frameworks"
          placeholder="eg format: React, Node"
        />
        <label htmlFor="devTools">DevTools:</label>
        <input
          type="text"
          name="devTools"
          id="devTools"
          placeholder="eg format: Git, VS Code "
        />
        <label htmlFor="libraries">Libraries:</label>
        <input
          type="text"
          name="libraries"
          id="libraries"
          placeholder="eg format: Pandas, Numpy "
        />
      </div>
    </fieldset>
  );
}

export default Skills;
