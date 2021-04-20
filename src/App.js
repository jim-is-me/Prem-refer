import React, { useEffect, useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {

	const [data, setData] = useState('');

	useEffect(() => {
		axios.get('https://run.mocky.io/v3/c0b105bd-6e35-4c12-9e41-a78d33dbcd06')
			.then(resp => {
				setData(resp.data.data.new);
			});
	}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data}1
        </a>
      </header>
    </div>
  );
}

export default App;
