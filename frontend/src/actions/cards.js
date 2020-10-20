import axios from "axios";
import { ADDED_CARD } from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

export const addNewCard = (card) => async (dispatch) => {
  console.log("test");
  console.log(card);
};
