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
            
        case actionTypes.INC_QUANTITY:
            const incItem = state.products.map(item => {
                if(item.id === action.payload.id) {
                    item.quantity++
                    return item
                } else {
                    return item
                }
            })

            return {
                ...state, products: incItem
            }
        
        case actionTypes.DEC_QUANTITY:      

            return {
                ...state, products: state.products.map(item => {
                    if(item.id === action.payload.id) {
                        item.quantity--
                        return item
                    } else {
                        return item
                    }
                })
            } 
        
        case actionTypes.GENERATE_INVOICE:
            return initialState

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

/* export const invoiceReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GENERATE_INVOICE:
            return ''
        

        default:
            return state;
    }
} */