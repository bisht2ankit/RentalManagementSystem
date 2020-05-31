import {combineReducers} from 'redux';
import CategoryReducer from './CategoryReducer';
import LocationReducer from './LocationReducer';

export const reducers = combineReducers({
    categories: CategoryReducer,
    location: LocationReducer
})