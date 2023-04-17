import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


import LogInForm from './Components/Authentication/LogInForm';
import RegistrationForm from './Components/Authentication/RegistrationForm';
import Dashboard from './Components/Dashboard/Dashboard';
import ExerciseTracker from './Components/ExerciseTracker/ExerciseTracker';
import './App.css';

function App() {
  return (
   <Router>

     <div>
       <Switch>
        <Route exact path="/" component={LogInForm} />
        <Route exact path="/registrationform" component={RegistrationForm} />
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path ="/exercisetracker" component={ExerciseTracker}/>
       </Switch>
     </div>


    </Router>

  );
}

export default App
