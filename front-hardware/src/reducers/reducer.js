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

        case actionTypes.EDIT_PRODUCT_INFO:
            return {
                ...state, products: state.products.map(product => {
                    if (product.id === action.payload.id) {
                        return product = action.payload
                    } else {
                        return product
                    }
                })
            } 
        
        case actionTypes.ADD_PRODUCT:

            return {
                ...state, products: [ ...state.products, action.payload ]
            }

        case actionTypes.DELETE_PRODUCT:

            return {
                ...state, products: state.products.filter(p => (
                    p.id !== action.payload.id
                ))
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
                if (item.id === action.payload.id) {
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

const initialProductState = {
    product: {}
}

export const infoProductReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_PRODUCT_INFO:
            return {
                ...state, product: action.payload
            }

        default:
            return state;
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