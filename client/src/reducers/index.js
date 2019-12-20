import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  projects: projectReducer,
  tasks: taskReducer
});