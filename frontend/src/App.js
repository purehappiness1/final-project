import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import SignInSide from './components/SignIn/Signin';
import Register from './components/Register/Register';
import Mainpage from './components/MainPage/Mainpage';
import Clients from './components/Dashboard/Clients';
import Chart from './components/Dashboard/Chart'

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
          <Route exact path='/' render={() => <Redirect to="/homepage" />} />
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signin">
            <SignInSide />
          </Route>
          <Route path="/clients">
            <Clients />
          </Route>
          <Route path="/chart">
            <Chart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
