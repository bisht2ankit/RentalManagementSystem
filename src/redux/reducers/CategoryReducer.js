import { SET_CATEGORIES, SET_SUBCATEGORIES } from "../../actions/types";

const initialState = {
    categories: [],
    subCategories: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {...state, categories: action.payload};
        case SET_SUBCATEGORIES:
            return {...state, subCategories: action.payload};
        default:
            return state;
    }
}