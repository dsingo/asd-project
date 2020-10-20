import axios from "axios";
import { ADDED_CARD, FAILED_ADD_CARD } from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

export const addNewCard = (card) => async (dispatch) => {
  /*try {
    await axios.post("/cards", { card });

    dispatch({ type: ADDED_CARD, payload: card });

    console.log("success");
  } catch (err) {
    dispatch({
      type: FAILED_ADD_CARD,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    console.log("not success");
  }*/
};
