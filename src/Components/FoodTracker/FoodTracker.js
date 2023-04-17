import React, { useState } from 'react';

const FoodTracker = () => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [foods, setFoods] = useState([]);

  const handleAddFood = (event) => {
    event.preventDefault();
    const newFood = { name: foodName, calories: parseInt(calories) };
    setFoods([...foods, newFood]);
    setFoodName('');
    setCalories('');
  };

  const handleDeleteFood = (index) => {
    const newFoods = [...foods];
    newFoods.splice(index, 1);
    setFoods(newFoods);
  };

  const totalCalories = foods.reduce((acc, curr) => acc + curr.calories, 0);

  return (
    <div>
      <h2>Food Diary</h2>
      <form onSubmit={handleAddFood}>
        <label htmlFor="food-name">Food name:</label>
        <input id="food-name" type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)} />

        <label htmlFor="calories">Calories:</label>
        <input id="calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />

        <button type="submit">Add Food</button>
      </form>

      {foods.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Food</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food, index) => (
                <tr key={index}>
                  <td>{food.name}</td>
                  <td>{food.calories}</td>
                  <td>
                    <button onClick={() => handleDeleteFood(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total:</td>
                <td>{totalCalories}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </>
      ) : (
        <p>No foods logged yet.</p>
      )}
    </div>
  );
};

export default FoodTracker;
