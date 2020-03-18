import { INCREMENT_COUNTER } from './actions';
import {combineReducers} from "redux";

const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { value: state.value + 1 };
        default:
            return state;
    }
}

export default combineReducers({
    counter: counterReducer
});