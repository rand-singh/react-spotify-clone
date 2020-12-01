import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';

function App() {
	const [token, setToken] = useState(null);

	// run code based on a given condition
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			setToken(_token);
		}

	}, []);

	return (
		<div className="app">
			{
				token ? (
					<code>logged in successfully</code>
				) : (
					<Login />
				)
			}
		</div>
	);
}

export default App;
