import { actionTypes } from "../constants/actionTypes";

const initialState = {
    products: []
}

export const reducerInventory = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INVENTORY:
            return {
                ...state, products: action.payload
            }

        default:
            return state
    }
}


export const sellReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case actionTypes.ADD_SELLSTATE:
            // Evita que se agrege el mismo producto
            let productExist = false;
            state.products.forEach(item => {
                if (item.id == action.payload.id) {
                    productExist = true
                }
            })
            if (!productExist) {
                return {
                    ...state, products: [...state.products, action.payload]
                }
            } else {
                return state
            }
            

            
        
        case actionTypes.DELETE_SELLSTATE:
            // console.log(action.payload.id)
            const products = state.products.filter(item => item.id !== action.payload.id)
            return {
                ...state, products: products
            }

        default:
            return state
    }

}