import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Exhibitors from './container/exhibitors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Exhibitors />
        </p>
      </div>
    );
  }
}

export default App;
