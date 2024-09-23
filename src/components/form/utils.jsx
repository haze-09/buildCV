function Duration({ duration }) {
  return (
    <>
      <label htmlFor={duration.start}>Duration: </label>
      <input
        type="number"
        name={duration.start}
        id={duration.start}
        placeholder="start year"
        required
      />
      <input
        type="number"
        name={duration.end}
        id={duration.end}
        placeholder="end year"
        required
      />
    </>
  );
}


export {Duration};
