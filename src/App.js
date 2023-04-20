import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


import LogInForm from './Components/Authentication/LogInForm';
import RegistrationForm from './Components/Authentication/RegistrationForm';
import Dashboard from './Components/Dashboard/Dashboard';
import ExerciseTracker from './Components/ExerciseTracker/ExerciseTracker';
import FeedbackForm from './Components/Feedback/FeedbackForm';
import NutrientBreakdown from './Components/Nutrient Breakdown/NutrientBreakdown'
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
        <Route exact path="/feedback" component={FeedbackForm}/>
        <Route exact path ="/foodtracker" component={FoodTracker}/>
        <Route exact path="/foodsearch" component={FoodSearch}/>


       </Switch>
     </div>


    </Router>



  );

  function FoodTracker() {
    return (
      <div>
        // Component code here
      </div>
    );
  }

  function FoodSearch() {
    return (
      <div>
        // Component code here
      </div>
    );
  }
}

export default App
