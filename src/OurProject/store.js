import {createStore} from "redux";
import allReducers from "./index";

const store = createStore (
    allReducers
);
store.getState();

export default store;