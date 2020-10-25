import axios from "axios";
import { ADD_CARD, FAILED_ADD_CARD, FAILED_ADD_CARDS, USER_LOADED, AUTH_ERROR, LOADING_CARDS, ADD_CARDS } from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

// Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
export const addNewCard = (card) => async (dispatch) => {
  axios.post("/cards", card).then(
    res => {
      console.log(res)
      dispatch({ type: ADD_CARD, payload: card });
      dispatch(
        setAlert("This card has been added successfully.", "success")
      );
    }
  ).catch(
    err => {
      console.log(err)
      dispatch({
      type: FAILED_ADD_CARD,
      payload: { msg: err.response.statusText, status: err.response.status },
      })
    }
  )
};

export const viewUserCards = () => async (dispatch) => {
  console.log('hello!')
  dispatch({ type: LOADING_CARDS })
  axios.get("/cards").then(
    payload => {
      console.log(payload.data)
      dispatch({ type: ADD_CARDS, cards: payload.data})
    }
  ).catch(
    err => {
      console.log(err)
      dispatch({
        type: FAILED_ADD_CARDS,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    }
  )
};


export const viewUserCardById = (id) => async (dispatch) => {
  const params = new URLSearchParams(["id", id]);

  const res = await axios.get("/cards", { params });

};

export const addToCard = (id) => async (dispatch) => {};

export const deleteSelectedCard = (id) => async (dispatch) => {};
