import { SET_LOCATION, CLEAR_LOCATION } from "../../actions/types";

export default (state = '', action) => {
    switch (action.type) {
        case SET_LOCATION:
            return action.payload;
        case CLEAR_LOCATION: 
            return '';
        default:
            return state;
    }
}