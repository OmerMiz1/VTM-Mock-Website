import React, {useState} from 'react';
import TopNavbar from "./components/TopNavbar" 

import Home from './containers/Home';
import MyHome from './containers/MyHome';
import Login from './containers/Login';
import Register from './containers/Register';
import NotFound404 from './containers/NotFound404';


import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("")
  console.log(`email->>>>>>`, email)
  


  const login = details => {
    setEmail(details);
  }

  // const register = details => {
  //   setEmail(details);
  // }

  return (
    <React.StrictMode>
      <Router>
        <TopNavbar></TopNavbar>
        <Switch>
          <Route exact path="/" component={() => <Home email={email}/>}/>
          <Route exact path="/home" component={() => <Home email={email}/>}/>
          <Route exact path="/myHome" component={() => <MyHome email={email}/>}/>
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
