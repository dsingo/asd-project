import React from 'react';
import styled from 'styled-components';

import DisplayCard from './DisplayCard';
import Button from './Button';

const ItemContainer = styled.div`
    list-style-type: none;
    margin: 2em .3em;
    padding: .2em;
    display: flex;
    flex-direction: row;
    width: 100%;

    &>* {
        margin: .6rem;
        width: 50%;
    }
`;

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        margin-bottom: .3rem;
    }

    &>* {
        margin: 0.4em;
    }
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardListItem = ({ card }) => (
    <ItemContainer>
        <CardContainer>
            <DisplayCard />
        </CardContainer>
        <DetailContainer>
            <h2>{card.nickname}'s Card</h2>
            <span>{card.type}</span>
            <span>Current Balance: ${card.balance}</span>
            <span>
                <Button to="/card/edit/">Top Up Card</Button>
            </span>
        </DetailContainer>
    </ItemContainer>
)

export default CardListItem;