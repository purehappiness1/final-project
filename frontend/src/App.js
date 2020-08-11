import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from './components/Dashboard/Dashboard';
import SignInSide from './components/SignIn/Signin';
import Register from './components/Register/Register';
import Mainpage from './components/MainPage/Mainpage';
import Clients from './components/Dashboard/Clients';
import Chart from './components/Dashboard/Chart'

function App() {

  function PrivateRoute({child}) {
    const isAuth = useSelector((state) => state.isAuth);

    return (
      <Route
        render={() =>
          isAuth
            ? (child) //в children (зарезервырованная переменная компонента) прилетает компонент Private и рендериться если isAuth - true
            : (<Redirect to={{ pathname: '/homepage' }} />) //иначе редирект на /home
        }
      />
    );
  }
  return (
    <div className="App">

      <Router>
        <Switch>
          
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
          <PrivateRoute path='/dashboard' child={<Dashboard/>}>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path='/clients' child={<Clients />}
          // isAuth={true} 
          >
            <Clients />
          </PrivateRoute>
          <PrivateRoute path='/chart' child={<Chart />}
          // isAuth={true} 
          >
            <Chart />
          </PrivateRoute>
          {/* <Route path='/dashboard' child={<Dashboard/>}>
            <Dashboard />
          </Route>
          <Route path='/clients' child={<Clients />}
          // isAuth={true} 
          >
            <Clients />
          </Route>
          <Route path='/chart' child={<Chart />}
          // isAuth={true} 
          >
            <Chart />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
