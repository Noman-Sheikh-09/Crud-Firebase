import { combineReducers } from "redux";
import AuthReducers from "./authReducers/AuthReducers";
import { StudentReducer } from "./studentReducers.jsx/StudentReducers";


const RootReducer = combineReducers({
    AuthReducers,
    StudentReducer

})
export default RootReducer;