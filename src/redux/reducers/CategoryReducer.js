import { SET_CATEGORIES, SET_SUBCATEGORIES, CLEAR_CATEGORIES } from "../../actions/types";

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
        case CLEAR_CATEGORIES: 
            return {categories: [], subCategories: []}
        default:
            return state;
    }
}