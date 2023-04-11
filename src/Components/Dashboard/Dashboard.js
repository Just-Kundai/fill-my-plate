import React, { useState } from 'react';
import FoodTracker from './FoodTracker';
import ExerciseTracker from './ExerciseTracker';

const Dashboard = () => {
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const handleFoodTrackerSubmit = (calories) => {
    setCaloriesConsumed(caloriesConsumed + calories);
  };

  const handleExerciseTrackerSubmit = (calories) => {
    setCaloriesBurned(caloriesBurned + calories);
  };

  const netCalories = caloriesConsumed - caloriesBurned;

  return (
    <div>
      <h1>My Fitness Tracker</h1>
      <div>
        <h2>Today's Summary</h2>
        <p>Calories Consumed: {caloriesConsumed}</p>
        <p>Calories Burned: {caloriesBurned}</p>
        <p>Net Calories: {netCalories}</p>
      </div>
      <div>
        <h2>Food Tracker 🍉</h2>
        <FoodTracker onFormSubmit={handleFoodTrackerSubmit} />
      </div>
      <div>
        <h2>Exercise Tracker</h2>
        <ExerciseTracker onFormSubmit={handleExerciseTrackerSubmit} />
      </div>
    </div>
  );
};

export default Dashboard;
