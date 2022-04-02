import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'

const Invoice = () => {

    const invoices = useSelector((state) => state.invoice.invoices)
    console.log(invoices);

    const dispatch = useDispatch()
    const { getInvoices } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getInvoices()
    }, [])

    return (
        <div>Invoice</div>
    )
}

export default Invoice