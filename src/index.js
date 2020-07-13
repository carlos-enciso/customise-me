import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<ReactFullpage
		licenseKey={'<API-KEY>'}
		scrollingSpeed={700}
		scrollOverflow={true}
		render={() => {
			return (
				<App />
			);
		}}
	/>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
