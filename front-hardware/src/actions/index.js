import { actionTypes } from "../constants/actionTypes";

const url = "http://localhost:8080/hardware"

export const getInventory = () => async(dispatch) => {

    return fetch(`${url}/inventory`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        dispatch({ type: actionTypes.GET_INVENTORY, payload: res })
    })

}

export const sellProduct = (products) => async(dispatch) => {
    
    products.forEach(product => {
        fetch(`${url}/inventory/${product.id}/sell/${product.quantity}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(res => console.log(res))
    })
    
    
    
}

// SELL STATE
export const addSellItem = (value) => (dispatch) => {

    return (
        dispatch({ type: actionTypes.ADD_SELLSTATE, payload: {...value, quantity: 1} })
    )

}

export const deleteSellItem = (id) => (dispatch) => {

    return (
        dispatch({ type: actionTypes.DELETE_SELLSTATE, payload: {id: id} })
    )

}


// QUANTITY ITEM IN SELL STATE
export const increaseQuantity = (id) => (dispatch) => {
    
    return (
        dispatch({ type: actionTypes.INC_QUANTITY, payload: {id: id} })
    )

}

export const decreaseQuantity = (id) => (dispatch) => {
    
    return (
        dispatch({ type: actionTypes.DEC_QUANTITY, payload: {id: id} })
    )

}

export const generateInvoice = (data) => async(dispatch) => {

    return fetch(`${url}/invoice`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => dispatch({ type: actionTypes.GENERATE_INVOICE}))
        // .then(res =>console.log(res))

    /* return (
        dispatch({ type: actionTypes.GENERATE_INVOICE, payload: data })
    ) */

}