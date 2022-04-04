import { actionTypes } from "../constants/actionTypes";
import { generatePDF } from "../document/pdfInvoice";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase/fireConfig'
import { async } from "@firebase/util";


// const url = "http://localhost:8080/hardware" //conexion local
const url ='https://donraul-api.herokuapp.com/hardware' //conexion con back en heroku

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
    
    /* products.forEach(product => {
        fetch(`${url}/inventory/${product.id}/sell/${product.quantity}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }) */

    for (const product of products) {
        // await is important
        await fetch(`${url}/inventory/${product.id}/sell/${product.quantity}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }
    
    
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
        .then(res => {
            generatePDF(res) // GENERAR PDF
            dispatch({ type: actionTypes.GENERATE_INVOICE})
        })
        // .then(res =>console.log(res))

    /* return (
        dispatch({ type: actionTypes.GENERATE_INVOICE, payload: data })
    ) */

}

//INVENTORY
export const showProductInfo = (value) => (dispatch) => {
    return (
        dispatch({ type: actionTypes.SHOW_PRODUCT_INFO, payload: value })
    )
}

export const editProductInfo = (productInfo) => async(dispatch) => {

    return fetch(`${url}/inventory/${productInfo.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(productInfo)
    })
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        dispatch({ type: actionTypes.EDIT_PRODUCT_INFO, payload: res })
    })

}

export const addProduct = (value) => async(dispatch) => {

    return fetch(`${url}/inventory`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
    })
    .then(res => res.json())
    .then(res => {
        dispatch({ type: actionTypes.ADD_PRODUCT, payload: res })
    })

}

export const deleteProduct = (id) => async(dispatch) => {
    
    return fetch(`${url}/inventory/${id}/delete`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => {
        dispatch({ type: actionTypes.DELETE_PRODUCT, payload: res })
    })

}


// INVOICE
export const getInvoices = () => async(dispatch) => {

    return fetch(`${url}/invoice`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        dispatch({ type: actionTypes.GET_INVOICES, payload: res })
    })

}

export const deleteInvoice = (id) => async(dispatch) => {
    
    await fetch(`${url}/invoice/${id}/delete`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    // .then(res => res.json())
    .then(res => {
        // console.log(res)
    })

    return fetch(`${url}/invoice`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        dispatch({ type: actionTypes.GET_INVOICES, payload: res })
    })

}

export const getInvoiceId = (id) => async(dispatch) => {
    
    return fetch(`${url}/invoice/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        generatePDF(res)
    })
}


// AUTHENTICATION
export const signup = (email, password) => async(dispatch) => {

    // console.log(email, password)
    const userData = createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
            // console.log(res)
            // const resJson = JSON.stringify(res.user)
            // sessionStorage.setItem('auth', resJson)
            dispatch({ type:actionTypes.SET_AUTHSTATE, payload:res.user })

        }).catch(e => {
            console.log(e)
        })


}

export const login = (email, password) => async(dispatch) => {

    // console.log(email, password)
    return signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            // console.log(res)
            /* const resJson = JSON.stringify(res.user)
            sessionStorage.setItem('auth', resJson) */
            // console.log(sessionStorage.getItem('auth'))
            dispatch({ type:actionTypes.SET_AUTHSTATE, payload:res.user })

        }).catch(e => {
            console.log(e)
        })


}

export const signOutAction = () => async(dispatch) => {

    // console.log(email, password)
    return signOut(auth)
        .then(res => {
            // console.log(res)
            /* const resJson = JSON.stringify(null)
            sessionStorage.setItem('auth', resJson) */
            dispatch({ type:actionTypes.SET_AUTHSTATE, payload:res })

        })
        .catch(e => {
            console.log(e)
        })


}

