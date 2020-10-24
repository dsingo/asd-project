import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import cards from './cards';

export default combineReducers({
    alert,
    auth,
    cards
});