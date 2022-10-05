import React, { Component } from 'react';
import Intro from './pages/menu';
import './App.css';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import Combat from './pages/combat';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dice from './pages/dices';

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
            <Route path="/dices" element={<Dice/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <main>
            
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
