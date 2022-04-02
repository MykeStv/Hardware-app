import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'
import TableComp from '../components/TableComp'
import { COLUMNS_INVOICES } from '../constants/columns'

const Invoice = () => {

    const invoices = useSelector((state) => state.invoice.invoices)
    // console.log(invoices);

    const dispatch = useDispatch()
    const { getInvoices, deleteInvoice } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getInvoices()
    }, [])

    //TABLE
    const columns = useMemo(() => COLUMNS_INVOICES, [])
    const data = useMemo(() => invoices, [invoices])

    const handleDelete = (value) => {
        deleteInvoice(value.id)
    }

    //add a column with a button
    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: 'addCart',
                Header: 'Acción',
                Cell: ({ row }) => (
                    <button onClick={() => handleDelete(row.values)}>
                        Eliminar
                    </button>
                )
            }
        ])
    }

    return (
        <div className='invoice_page'>
            <TableComp
                classname='table_invoice'
                columns={columns} data={data} tableHooks={tableHooks}
            />
        </div>
    )
}

export default Invoice