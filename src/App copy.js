import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import List from './List';
import Content from './content/Content';

class App extends Component {
  render() {
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
            Learn React
          </a>
        <Content />
        </header>
      </div>
    );
  }
}

export default App;
