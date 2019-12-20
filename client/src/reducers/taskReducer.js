import { SET_TASKS,SET_CURRENT_TASK } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
    all : [],
    currentTask: {
      name:"",
      description:"",
      startDate:"",
      endDate:"",
      status: "",
      assignee:""
    }
}

export default function(state=initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        all:action.payload
      };
    case SET_CURRENT_TASK:
        return {
            ...state,
            currentTask: action.payload
        }
    default:
      return state;
  }
}