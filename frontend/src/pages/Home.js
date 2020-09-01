import React, { useContext } from 'react';
import { Link } from '@reach/router';
import CardsContext from '../contexts/CardsContext';
import Button from '../components/Button'
import CenteredViewport from '../layouts/CenteredViewport';
import CardListItem from '../components/CardListItem';

export default () => {
  // const cards = ;

  const { state:cards } = useContext(CardsContext);

  return (
    <CenteredViewport>
      <h1>View your cards now!</h1>
      {cards.map( (card, index) => (
        <CardListItem card={card} key={index} />
      ))}

      <Button to="/card/add">Add a card</Button>
    </CenteredViewport>
  )
}