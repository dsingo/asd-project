import { ADD_CARD, LOADING_CARDS, ADD_CARDS } from '../actions/types';


const initialState = {
    cards: [],
    loadingCards:false,
    loadedCards: false
}
const cards = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                cards: [
                    ...cards,
                    action.card
                ]
            }
        case LOADING_CARDS:
            return {
                ...state,
                loadingCards: true
            }
        case ADD_CARDS: 
            return {
                ...state,
                cards: action.cards,
                loadingCards: false,
                loadedCards: true
            }
        default: return state
    }
}

export default cards;