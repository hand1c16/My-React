import { combineReducers } from "redux";
import BookReducer from "./BooksReducer";
import ClientReducer from "./ClientReducer";

const allReducers = combineReducers({
    Books: BookReducer,
    Client: ClientReducer
})

export default allReducers;