import axios from "axios";
import { ADDED_CARD, FAILED_ADD_CARD } from "./types";
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
  try {
    await axios.post("/cards", { card });

    //dispatch({ type: ADDED_CARD, payload: card });

    console.log("success");
  } catch (err) {
    //dispatch({
    //type: FAILED_ADD_CARD,
    //payload: { msg: err.response.statusText, status: err.response.status },
    //});
    console.log("not success");
  }
};

export const viewUserCards = (id) => async (dispatch) => {
  const params = new URLSearchParams(["id", id]);

  const res = await axios.get("/cards", { params });
};

export const addToCard = (id) => async (dispatch) => {};

export const deleteSelectedCard = (id) => async (dispatch) => {};
