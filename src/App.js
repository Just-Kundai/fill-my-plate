import React from 'react';
import LogInForm from './Components/Authentication/LogInForm';
import RegistrationForm from './Components/Authentication/RegistrationForm';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div>

      <LogInForm />
      <RegistrationForm />

      <div className="Dashboard">
      <Dashboard />
      </div>


    </div>
  );
}

export default App;
