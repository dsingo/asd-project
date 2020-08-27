import React, { useReducer, useMemo } from 'react';
import CardReducer from '../reducers/CardReducer';

const cards = [];

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