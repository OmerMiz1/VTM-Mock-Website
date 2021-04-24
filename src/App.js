import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import TopNavbar from "./components/TopNavbar"

import Home from './containers/Home';
import MyHome from './containers/MyHome';
import Login from './containers/Login';
import Register from './containers/Register';
import NotFound404 from './containers/NotFound404';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
<<<<<<< HEAD
// import awsmobile from './aws-exports';

// Fix configuration only locally - not during deployment.
// Amplify.configure(awsmobile);
=======
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);
>>>>>>> parent of 6f68886... removed aws-config import

// var aws_exports
// try {
// 	aws_exports = require('./aws-exports')
// } catch(_) {
// 	aws_exports = null
// }

// if(aws_exports) {
// 	Amplify.configure(aws_exports.awsmobile)
// }

function App() {
	const [user, setUser] = useState(null)

	const login = userObject => {
		setUser(userObject);
	}

	const logout = async () => {
		try {
			await Auth.signOut()
				.then(response => {
					setUser(null)
				});
			;
		} catch (error) {
			console.log('error sigining out: ', error);
		}
	}

	return (
		<React.StrictMode>
			<Router>
				<TopNavbar user={user} logout={logout}></TopNavbar>
				<Switch>
					<Route exact path="/" component={() => <Home user={user} />} />
					<Route exact path="/home" component={() => <Home user={user} />} />
					<Route exact path="/login" component={() => <Login login={login} />} />
					<Route exact path="/register" component={() => <Register login={login} />} />
					<Route exact path="/notFound404" component={NotFound404} />
					<Redirect to="/notFound404" />
				</Switch>
			</Router>
		</React.StrictMode>
	);
}

export default App;
