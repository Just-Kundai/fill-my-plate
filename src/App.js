import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


import LogInForm from './Components/Authentication/LogInForm';
import RegistrationForm from './Components/Authentication/RegistrationForm';
import Dashboard from './Components/Dashboard/Dashboard';
import ExerciseTracker from './Components/ExerciseTracker/ExerciseTracker';
import FeedbackForm from './Components/Feedback/FeedbackForm';
import NutrientBreakdown from './Components/Nutrient Breakdown/NutrientBreakdown'
import Profile from './Components/Profile/Profile'
import './App.css';
function App() {
  return (
  <div>

    <Router>
      <Switch>
        <Route exact path="/" component={LogInForm} />
        <Route exact path="/registrationform" component={RegistrationForm} />
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path ="/exercisetracker" component={ExerciseTracker}/>
        <Route exact path="/feedback" component={FeedbackForm}/>
        <Route exact path ="/foodtracker" component={FoodTracker}/>
        <Route exact path="/foodsearch" component={FoodSearch}/>
        <Route exact path="/profile" component={Profile}/>
      </Switch>
    </Router>
  </div>

  );
}

function FoodTracker() {
  return (
    <div>
    <FoodTracker />
    </div>
  );
}

function FoodSearch() {
  return (
    <div>
      <FoodSearch />

    </div>
  );
}




export default App
