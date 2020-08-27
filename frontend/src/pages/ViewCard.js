import React, { useContext } from 'react';
import CardsContext from '../contexts/CardsContext';

const ViewCard = ({ id }) => {
    const { state:cards } = useContext(CardsContext);
    const card = cards[id];


    const error = typeof card === 'undefined';

    return (
        <>
            {error ? 'Card not found' : card.nickname}
        </>
    )
}

export default ViewCard;