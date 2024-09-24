import { useState } from "react";
import { Duration } from "./utils";

function Job({ index }) {
  function nameHelper(name) {
    return name + index;
  }
  let role = nameHelper("role");
  let org = nameHelper("organization");
  let location = nameHelper("jobLocation");
  let desc = nameHelper("jobDesc");
  let duration = {
    start: nameHelper("jobDuration") + "Start",
    end: nameHelper("jobDuration") + "end",
  };

  return (
    <fieldset>
      <legend>Job {index + 1}</legend>

      <div className="twoCol">
        <label htmlFor={role}>Role :</label>
        <input type="text" name={role} id={role} required />
        <label htmlFor={org}>Organization :</label>
        <input type="text" name={org} id={org} required />
        <label htmlFor={location}>Location :</label>
        <input type="text" name={location} id={location} required />
        <label htmlFor={desc}>Description :</label>
        <textarea name={desc} id={desc} required></textarea>
        <Duration duration={duration} />
      </div>

    </fieldset>
  );
}

function Experience() {
  const [jobs, setJobs] = useState([0]);

  function addJob() {
    setJobs([...jobs, jobs.length]);
  }

  function removeJob() {
    setJobs(jobs.slice(0, -1));
  }

  return (
    <fieldset>
      <legend>Experience</legend>
      {jobs.map((_, index) => (
        <Job key={index} index={index} />
      ))}
      <button type="button" onClick={addJob}>
        Add Job
      </button>

      {jobs.length > 1 && (
        <button type="button" onClick={removeJob}>
          Remove Job
        </button>
      )}
    </fieldset>
  );
}

export default Experience;
