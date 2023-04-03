import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import LoginForm from './Components/Authentication/LogInForm';
import RegistrationForm from './Components/Authentication/RegistrationForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
