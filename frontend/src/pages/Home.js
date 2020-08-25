import React from 'react';
import Button from '../components/Button'

export default () => {
  const cards = [
    {
      id: "1",
      type: "Adult",
      balance: 15.000,
      nickname: "David"
    },
    {
      id: "2",
      type: "Child",
      balance: 20.000,
      nickname: "Andrew"
    },
  ];

  return (
    <>
      <h1>View your cards</h1>
      <ul>
        {cards.map( card => (
          <li>
            {card.nickname}'s Card - Balance ${card.balance}
          </li>
        ))}
      </ul>

      <Button to="/add">Add a card</Button>
    </>
  )
}