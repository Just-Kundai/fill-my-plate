import React, { useState } from "react";

const Settings = () => {
  const [calorieGoal, setCalorieGoal] = useState(2000);
  const [proteinGoal, setProteinGoal] = useState(100);
  const [carbGoal, setCarbGoal] = useState(200);
  const [fatGoal, setFatGoal] = useState(50);

  const handleCalorieChange = (event) => {
    setCalorieGoal(event.target.value);
  };

  const handleProteinChange = (event) => {
    setProteinGoal(event.target.value);
  };

  const handleCarbChange = (event) => {
    setCarbGoal(event.target.value);
  };

  const handleFatChange = (event) => {
    setFatGoal(event.target.value);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="setting">
        <label htmlFor="calorie-goal">Calorie Goal:</label>
        <input
          id="calorie-goal"
          type="number"
          value={calorieGoal}
          onChange={handleCalorieChange}
        />
      </div>
      <div className="setting">
        <label htmlFor="protein-goal">Protein Goal:</label>
        <input
          id="protein-goal"
          type="number"
          value={proteinGoal}
          onChange={handleProteinChange}
        />
      </div>
      <div className="setting">
        <label htmlFor="carb-goal">Carb Goal:</label>
        <input
          id="carb-goal"
          type="number"
          value={carbGoal}
          onChange={handleCarbChange}
        />
      </div>
      <div className="setting">
        <label htmlFor="fat-goal">Fat Goal:</label>
        <input
          id="fat-goal"
          type="number"
          value={fatGoal}
          onChange={handleFatChange}
        />
      </div>
    </div>
  );
};

export default Settings;
