import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './components/Store';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Store/>
      </Router>
    </>
  );
}

export default App;
