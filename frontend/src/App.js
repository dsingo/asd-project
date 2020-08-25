import React from 'react';
import Home from './pages/Home';
import AddCard from './pages/AddCard'
import { Router } from '@reach/router'

function App() {
  return (
    <Router>
      <Home path="/" />
      <AddCard path="card/add" />
    </Router>
  );
}

export default App;
