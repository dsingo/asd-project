import React, { useState, useContext } from 'react';
import { useNavigate } from '@reach/router';
import CardsContext from '../contexts/CardsContext';

export default () => {

  const { dispatch } = useContext(CardsContext);
  const navigate = useNavigate();

  const [card, setCard] = useState({
    nickname: '',
    type: 'Adult',
    balance: 0,
  });

  const setNickname = (e) => {
    const newNickname = e.target.value;

    setCard({
      ...card,
      nickname: newNickname
    });
  }

  const setCardType = (e) => {
    const newCardType = e.target.value;

    setCard({
      ...card,
      type: newCardType
    });
  }

  const cardTypes = [
    'Adult',
    'Concession',
    'Child'
  ]

  const addCard = e => {
    e.preventDefault();
    const action = {
      type: 'ADD_CARD',
      card: card
    }
    dispatch(action);
    navigate('/');
  }

  return (
    <>
      <form>
        <label htmlFor='nickname'>Card Nickname</label>
        <input name='nickname' value={card.nickname} onChange={setNickname} />
        <label htmlFor='type'>Card Type</label>
        <select value={card.type} onChange={setCardType}>
          { cardTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
        <button type="submit" onClick={addCard}>Add New Card</button>
      </form>
    </>
  )
}