import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const DOWN_DIRECTION = 'down';

let showNavigation = false;

ReactDOM.render(
	<ReactFullpage
		licenseKey="<API-KEY>"
		scrollingSpeed={700}
		scrollOverflow
		fixedElements="#header"
		onLeave={(origin, destination, direction) => {
			if (direction === DOWN_DIRECTION) {
				showNavigation = destination.index >= 1;
			} else {
				showNavigation = destination.index !== 0;
			}
		}}
		render={() => {
			return <App expandedNav={showNavigation} />;
		}}
	/>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
