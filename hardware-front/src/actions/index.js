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