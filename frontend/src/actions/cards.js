import axios from "axios";
import {
  ADD_CARD,
  FAILED_ADD_CARD,
  FAILED_ADD_CARDS,
  USER_LOADED,
  AUTH_ERROR,
  LOADING_CARDS,
  ADD_CARDS,
  DELETED_CARD,
  FAILED_DELETE_CARD,
} from "./types";
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
  axios
    .post("/cards", card)
    .then((res) => {
      dispatch({ type: ADD_CARD, payload: card });
      dispatch(setAlert("This card has been added successfully.", "success"));
    })
    .catch((err) => {
      dispatch({
        type: FAILED_ADD_CARD,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    });
};

export const viewUserCards = () => async (dispatch) => {
  dispatch({ type: LOADING_CARDS });
  axios
    .get("/cards")
    .then((payload) => {
      dispatch({ type: ADD_CARDS, cards: payload.data });
    })
    .catch((err) => {
      dispatch({
        type: FAILED_ADD_CARDS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    });
};

export const viewUserCardById = (id) => async (dispatch) => {
  const params = new URLSearchParams({ id: id });

  const res = await axios.get("/cards", { params });
};

export const searchCardById = (id) => async (dispatch) => {
  await axios.get("/cards", { id });
};

export const topUpCard = (id, amount) => async (dispatch) => {
  const params = new URLSearchParams({ id: id });
  params.set("id", id);
  await axios.put("/cards/topup", {
    id: id,
    amount: amount,
  });
};

export const deleteSelectedCard = () => async (dispatch) => {
  await axios.delete("/cards/delete");
};