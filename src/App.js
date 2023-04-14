import React from 'react';
import LogInForm from './Components/Authentication/LogInForm';
import RegistrationForm from './Components/Authentication/RegistrationForm';
import Dashboard from './Components/Dashboard/Dashboard';
import ExerciseTracker from './Components/ExerciseTracker/ExerciseTracker';
import './App.css';

function App() {
  return (
    <div>

      <LogInForm />
      <RegistrationForm />

      <div className="Dashboard">
      <Dashboard />
      </div>

      <div className="ExerciseTracker">
      <ExerciseTracker />
      </div>


    </div>
  );
}

export default App;
