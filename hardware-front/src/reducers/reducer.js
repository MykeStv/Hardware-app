import { actionTypes } from "../constants/actionTypes";

const initialState = {
    inventory: []
}

export const reducerInventory = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INVENTORY:
            return {
                ...state, inventory: action.payload
            }

        default:
            return state
    }
}