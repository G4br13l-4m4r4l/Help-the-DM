import React, { Component } from 'react';
import Intro from './components/menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <header>
          <Intro />
        </header>
        <h1 className='soon'>Coming soon!</h1>
      </div>
    );
  }
}

export default App;
