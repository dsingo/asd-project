import React, { useReducer, useMemo } from 'react';
import CardReducer from '../reducers/CardReducer';

const cards = [
      {
        type: "Adult",
        balance: 15.000,
        nickname: "David"
      },
      {
        type: "Child",
        balance: 20.000,
        nickname: "Andrew"
      },
    ];

const CardsContext = React.createContext();

export default CardsContext;

export const CardsContextWrapper = ({ children }) => {
    const [state, dispatch] = useReducer(CardReducer, cards);
    const contextValue = useMemo(() => {
        return { state, dispatch }
    }, [state, dispatch]);

    return (
        <CardsContext.Provider value={contextValue} >
            { children }
        </CardsContext.Provider>
    )
};