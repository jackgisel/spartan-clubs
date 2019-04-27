import { clubsRef } from "../config/firebase";
import { FETCH_CLUBS } from "./types";

export const addClub = newClub => async dispatch => {
  clubsRef.push().set(newClub);
};

export const fetchClubs = () => async dispatch => {
  clubsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_CLUBS,
      payload: snapshot.val()
    });
  });
};
