import { SET_CATEGORIES, SET_SUBCATEGORIES, CLEAR_CATEGORIES } from "./types";

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

export const clearCategories = () => async dispatch => {
    dispatch({
        type: CLEAR_CATEGORIES
    })
}