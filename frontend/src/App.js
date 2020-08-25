import React from 'react';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import AddCard from './pages/AddCard'
import { Router } from '@reach/router'

function App() {
  return (
    <Router>
      <Home path="/" />
      <AddCard path="/card/add" />
      <FAQ path="/faq" />
    </Router>
  );
}

export default App;
