import React, { useContext } from 'react';
import { Link } from '@reach/router';
import CardsContext from '../contexts/CardsContext';
import Button from '../components/Button'

export default () => {
  // const cards = [
  //   {
  //     id: "1",
  //     type: "Adult",
  //     balance: 15.000,
  //     nickname: "David"
  //   },
  //   {
  //     id: "2",
  //     type: "Child",
  //     balance: 20.000,
  //     nickname: "Andrew"
  //   },
  // ];

  const { state:cards } = useContext(CardsContext);

  return (
    <>
      <h1>View your cards</h1>
      <ul>
        {cards.map( (card, index) => (
          <li>
            <Link to={`/card/${index}`}>{card.nickname}'s Card</Link> - Balance ${card.balance} 
          </li>
        ))}
      </ul>

      <Button to="/card/add">Add a card</Button>
    </>
  )
}