import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NutrientBreakdown = ({ foodName }) => {
  const [nutrients, setNutrients] = useState(null);

  useEffect(() => {
    // Make API request for nutrient data when component mounts
    axios.get('https://trackapi.nutritionix.com/v2/natural/nutrients', {
      headers: {
        'x-app-id': YOUR_APP_ID,
        'x-app-key': YOUR_APP_KEY,
        'x-remote-user-id': '0',
        'Content-Type': 'application/json'
      },
      params: {
        query: foodName
      }
    })
    .then(response => {
      setNutrients(response.data.foods[0].nf_total_fat);
    })
    .catch(error => {
      console.log(error);
    });
  }, [foodName]);

  return (
    <div>
      {nutrients ? (
        <ul>
          <li>Calories: {nutrients.nf_calories} kcal</li>
          <li>Protein: {nutrients.nf_protein} g</li>
          <li>Carbs: {nutrients.nf_total_carbohydrate} g</li>
          <li>Fat: {nutrients.nf_total_fat} g</li>
        </ul>
      ) : (
        <p>Loading nutrient data...</p>
      )}
    </div>
  );
};

export default NutrientBreakdown;
