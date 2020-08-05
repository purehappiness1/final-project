import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import SignInSide from './components/SignIn/Signin';
import Register from './components/Register/Register';
import Mainpage from './components/MainPage/Mainpage';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/homepage">
            <Mainpage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signin">
            <SignInSide />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
