import React, { Component } from 'react';
import Intro from './pages/menu';
import './App.css';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import Combat from './pages/combat';
import {BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>

      <div className="background">
        <header>
          <Intro />
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Combat" element={<Combat/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <main>
        <Link to="/Combat">Combate</Link><br/>
        <Link to="/">Home</Link>
        
        </main>
        <h1 className='soon'>Coming soon!</h1>
      </div>
      </Router>
    );
  }
}

export default App;
