import {createStore} from "redux"
import allReducers from "./reducer/index"

const store = createStore (
    allReducers
);
store.getState();

export default store;