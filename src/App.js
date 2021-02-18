import React, { useState } from 'react';
import './App.css';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const App = () => {
	const user = useSelector(selectUser);
	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<Router>
					<LeftSide />
					<Switch>
						<Route path="/rooms/:roomId">
							<RightSide />
						</Route>
					</Switch>
				</Router>
			)}
		</div>
	);
};

export default App;
