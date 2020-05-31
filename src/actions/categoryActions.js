import { SET_CATEGORIES } from "./types";

export const setCategories = (categories) => async dispatch => {
    dispatch({
        type: SET_CATEGORIES,
        payload: categories
    })
}