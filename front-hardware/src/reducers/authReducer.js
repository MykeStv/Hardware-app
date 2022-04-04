import { actionTypes } from "../constants/actionTypes";

const initialState = {
    authState: null
}

export const authenticationReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_AUTHSTATE:
            return {
                ...state, authState: action.payload
            }
        default:
            return state
    }
    
}