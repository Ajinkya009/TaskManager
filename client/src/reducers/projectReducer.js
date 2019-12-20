import { SET_PROJECTS,SET_CURRENT_PROJECT } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
    all : [],
    currentProject: {
      name:"",
      description:"",
      duration:"",
      tasks:[],
      _id:"",
      startDate:"",
      admin:"",
      __v:0
    }
}

export default function(state=initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        all:action.payload
      };
    case SET_CURRENT_PROJECT:
        return {
            ...state,
            currentProject: action.payload
        }
    default:
      return state;
  }
}