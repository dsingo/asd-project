import React from 'react';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import AddCard from './pages/AddCard';
import ViewCard from './pages/ViewCard';
import { Router } from '@reach/router';
import { CardsContextWrapper } from './contexts/CardsContext';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

function App() {

  return (
    <CardsContextWrapper>
      <GlobalStyle />
      <Router>
        <Home path="/" />
        <AddCard path="/card/add" />
        <ViewCard path="/card/:id" />
        <FAQ path="/faq" />
      </Router>
    </CardsContextWrapper>
  );
}

export default App;

