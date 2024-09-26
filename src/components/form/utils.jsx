function Duration({ duration, handleChange, formData, section, index }) {
  return (
    <>
      <label htmlFor={duration.start}>Duration: </label>
      <div className="duration">
        <input
          type="number"
          name="start"
          id={duration.start}
          placeholder="start year"
          value={
            section === "education"
              ? formData.education.university[index].start || ""
              : formData.experience[index].start || ""
          }
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="end"
          id={duration.end}
          placeholder="end year"
          value={
            section === "education"
              ? formData.education.university[index].end || ""
              : formData.experience[index].end || ""
          }
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}

export { Duration };
