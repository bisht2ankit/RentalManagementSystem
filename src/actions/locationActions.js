import { SET_LOCATION, CLEAR_LOCATION } from "./types";

export const setLocation = (location) => async dispatch => {
    dispatch({
        type: SET_LOCATION,
        payload: location
    })
}

export const clearLocation = () => async dispatch => {
    dispatch({
        type: CLEAR_LOCATION
    })
}