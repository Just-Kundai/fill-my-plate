import React, { useState } from 'react';

function Profile() {
  // Define state variables
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [goal, setGoal] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would send the form data to the server to update the user's profile
  }

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />

        <label htmlFor="gender">Gender</label>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nonbinary">Nonbinary</option>
        </select>

        <label htmlFor="height">Height (cm)</label>
        <input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />

        <label htmlFor="weight">Weight (kg)</label>
        <input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />

        <label htmlFor="goal">Goal</label>
        <select id="goal" value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="lose">Lose Weight</option>
          <option value="maintain">Maintain Weight</option>
          <option value="gain">Gain Weight</option>
        </select>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default Profile;
