const CardReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [...state, action.card]
        default: return state
    }
}

export default CardReducer;