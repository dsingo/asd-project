import CardReducer from './CardReducer'

test('Add Card to an Empty Account', () => {
    const cards = []
    const newCard = {
        nickname: 'David',
        type: 'Adult',
        balance: 0
    }
    const action = {
        type: 'ADD_CARD',
        card: newCard
    }
    expect(CardReducer(cards, action)).toEqual([
        newCard
    ]);
})