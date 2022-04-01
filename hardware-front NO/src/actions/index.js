import { Value } from "sass";
import { actionTypes } from "../constants/actionTypes";

const url = "http://localhost:8080/hardware/inventory"

export const getInventory = () => async(dispath) => {

    return fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        dispath({ type: actionTypes.GET_INVENTORY, payload: res })
    })

}

// SELL STATE
export const addSellItem = (value) => (dispath) => {

    return (
        dispath({ type: actionTypes.ADD_SELLSTATE, payload: {...value, quantity: 1} })
    )

}

export const deleteSellItem = (id) => (dispath) => {

    return (
        dispath({ type: actionTypes.DELETE_SELLSTATE, payload: {id: id} })
    )

}


// QUANTITY
export const increaseQuantity = () => (dispath) => {
    
    return (
        dispath({ type: actionTypes.INC_QUANTITY, pay })
    )

}