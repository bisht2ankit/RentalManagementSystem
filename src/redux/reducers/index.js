import {combineReducers} from 'redux';
import CategoryReducer from './CategoryReducer';

export const reducers = combineReducers({
    categories: CategoryReducer
})