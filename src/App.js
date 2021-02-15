import React from 'react';
import './App.css';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<div className="app">
			<Router>
				<LeftSide />
				<Switch>
					<Route path="/rooms/:roomId">
						<RightSide />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
