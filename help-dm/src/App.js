import React, { Component } from 'react';
import Intro from './components/menu';
import './App.css';
import NotFound from './components/NotFound';
import Combat from './components/combat';
import {BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>

      <div className="background">
        <header>
          <Intro />
        </header>
        <Routes>
          <Route path="/Combat" element={<Combat/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <main>
        <Link to="/Combat">Combate</Link>
        
        </main>
        <h1 className='soon'>Coming soon!</h1>
      </div>
      </Router>
    );
  }
}

export default App;
