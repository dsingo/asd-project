import axios from "axios";
import { ADDED_CARD, FAILED_ADD_CARD } from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

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
    await axios.post("/cards", { card: card });

    dispatch({ type: ADDED_CARD, payload: res.data });

    console.log("success");
  } catch (err) {
    dispatch({
      type: FAILED_ADD_CARD,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    console.log("not success");
  }
};
