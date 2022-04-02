import { actionTypes } from "../constants/actionTypes";

const initialState = {
    invoices: []
}

export const getInvoicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INVOICES:
            return {
                ...state, invoices: action.payload
            }

        default:
            return state
    }
}