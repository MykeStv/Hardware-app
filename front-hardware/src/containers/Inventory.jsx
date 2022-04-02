import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
// import GlobalFilter from './GlobalFilter';

const Inventory = () => {

    const inventory = useSelector((state) => state.inventory.products)
    const dispatch = useDispatch()

    const { getInventory } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getInventory()
    }, [inventory])

    //TABLE


    /* const tableInstance = useTable(
        {
            columns,
            data
        },
        useGlobalFilter,
        tableHooks,
        useSortBy
    ) */
    /* 
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
            preGlobalFilteredRows,
            setGlobalFilter,
            state
        } = tableInstance; */


    return (
        <div>Inventory</div>
    )
}

export default Inventory