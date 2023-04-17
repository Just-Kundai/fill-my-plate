import React, { useState } from 'react';
import axios from 'axios';

const FoodSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    axios.get(`https://api.nutritionix.com/v1_1/search/${searchTerm}?results=0:10&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,nf_protein,nf_total_carbohydrate&appId=YOUR_APP_ID&appKey=YOUR_APP_KEY`)
      .then(response => {
        setSearchResults(response.data.hits);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Food Search</h2>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(result => (
          <li key={result.fields.item_id}>
            <div>{result.fields.item_name}</div>
            <div>{result.fields.brand_name}</div>
            <div>Calories: {result.fields.nf_calories}</div>
            <div>Total Fat: {result.fields.nf_total_fat}</div>
            <div>Protein: {result.fields.nf_protein}</div>
            <div>Total Carbohydrate: {result.fields.nf_total_carbohydrate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodSearch;
