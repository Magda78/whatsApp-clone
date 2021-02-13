import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';

const App = () => {
	return (
		<div className="app">
			<div className="app__left">
				<LeftSide />
			</div>
			<div className="app__right">
				<RightSide />
			</div>
		</div>
	);
};

export default App;
