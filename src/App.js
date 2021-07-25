import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './components/Store';
import Team from './components/Team'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Store} /> 
        <Route path='/team' exact component={Team} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
