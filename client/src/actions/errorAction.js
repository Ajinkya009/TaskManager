import {GET_ERRORS} from "./types";

export const setErrors = (payload) => dispatch =>{
    dispatch({
        type: GET_ERRORS,
        payload: payload
    });
}