import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "./BlogReducer";

const rootReducer = combineReducers({
    blogs: blogReducer, 
});

export default rootReducer;