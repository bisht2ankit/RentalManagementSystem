import { SET_LOCATION } from "./types";

export const setLocation = (location) => async dispatch => {
    dispatch({
        type: SET_LOCATION,
        payload: location
    })
}