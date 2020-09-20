import axios from 'axios';
import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    USER_LOADED, 
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT,
    ACCOUNT_DELETED,
    USER_ERROR
} from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken'

// Load user
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get('/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

//Register User
export const register = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/user', body, config)

        dispatch ({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
}

// Login user
export const login = ( email, password ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/auth', body, config)

        dispatch ({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};

//Delete account
export const deleteAccount = () => async dispatch => {
    if (window.confirm('Are you sure you want to delete your account? This can NOT be undone.')) {
        try {
            await axios.delete('/user');

            dispatch({  type: ACCOUNT_DELETED });

            dispatch(setAlert('You account has been deleted successfully.', 'success'));
        } catch (err) {
            dispatch({ 
                type: USER_ERROR, 
                payload: { msg: err.response.statusText, status: err.response.status 
                }
            });
        }
    }
}

// Logout / Clear profile
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
}