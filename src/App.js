import React, { Component } from 'react';
import logo from './logo.svg';
import Khan from './Khan/Khan'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Khan />
        </header>
      </div>
    );
  }
}

export default App;
