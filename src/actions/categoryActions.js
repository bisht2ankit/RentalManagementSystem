import { SET_CATEGORIES, SET_SUBCATEGORIES } from "./types";

export const setCategories = (categories) => async dispatch => {
    dispatch({
        type: SET_CATEGORIES,
        payload: categories
    })
}

export const setSubCategories = (subCategories) => async dispatch => {
    dispatch({
        type: SET_SUBCATEGORIES,
        payload: subCategories
    })
}