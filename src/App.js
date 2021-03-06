import React, {useState, useEffect} from 'react';
import TopNavbar from "./components/TopNavbar" 

import Home from './containers/Home';
import MyHome from './containers/MyHome';
import Login from './containers/Login';
import Register from './containers/Register';
import NotFound404 from './containers/NotFound404';


import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log("email change!!!" , user);

  }, [user])
  


  const login = details => {
    setUser(details);
  }

  const logout = () => {
    setUser(null);
  }


  return (
    <React.StrictMode>
      <Router>
        <TopNavbar user={user} logout={logout}></TopNavbar>
        <Switch>
          <Route exact path="/" component={() => <Home user={user}/>}/>
          <Route exact path="/home" component={() => <Home user={user}/>}/>
          <Route exact path="/login" component={() => <Login login={login}/>}/>
          <Route exact path="/register" component={() => <Register login={login}/>}/>
          <Route exact path="/notFound404" component={NotFound404}/>
          <Redirect to="/notFound404" />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
