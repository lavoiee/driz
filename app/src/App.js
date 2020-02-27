import React from 'react';
import drizzleOptions from './drizzleOptions';
import {DrizzleProvider} from 'drizzle-react';
//import logo from './logo.svg';
//import './App.css';

function App() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <div>Dapp</div>
      </DrizzleProvider>
    }
  };
    /*<div className="App">
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
          Learn React
        </a>
      </header>
    </div>*/


export default App;
