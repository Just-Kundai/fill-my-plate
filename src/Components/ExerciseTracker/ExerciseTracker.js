import React, { useState } from "react";

// Define the component
function ExerciseTracker() {
  // Define state variables
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseDuration, setExerciseDuration] = useState(0);
  const [exerciseIntensity, setExerciseIntensity] = useState("");

  // Define functions
  const handleExerciseNameChange = (event) => {
    setExerciseName(event.target.value);
  };

  const handleExerciseDurationChange = (event) => {
    setExerciseDuration(event.target.value);
  };

  const handleExerciseIntensityChange = (event) => {
    setExerciseIntensity(event.target.value);
  };

  const handleExerciseSubmit = (event) => {
    event.preventDefault();
    const exercise = {
      name: exerciseName,
      duration: exerciseDuration,
      intensity: exerciseIntensity,
    };
    setExercises([...exercises, exercise]);
    setExerciseName("");
    setExerciseDuration(0);
    setExerciseIntensity("");
  };

  // Render the component
  return (
    <div>
      <h1>Exercise Tracker</h1>
      <form onSubmit={handleExerciseSubmit}>
        <label>
          Exercise name:
          <input type="text" value={exerciseName} onChange={handleExerciseNameChange} />
        </label>
        <br />
        <label>
          Exercise duration:
          <input type="number" value={exerciseDuration} onChange={handleExerciseDurationChange} />
        </label>
        <br />
        <label>
          Exercise intensity:
          <select value={exerciseIntensity} onChange={handleExerciseIntensityChange}>
            <option value="">Select intensity</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Exercise</button>
      </form>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.name} - {exercise.duration} minutes - {exercise.intensity} intensity
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export the component
export default ExerciseTracker;
