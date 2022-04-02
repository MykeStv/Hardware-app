import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import { COLUMNS } from '../constants/columns'
// import GlobalFilter from './GlobalFilter';

const Inventory = () => {

    const inventory = useSelector((state) => state.inventory.products)
    const dispatch = useDispatch()

    const { getInventory } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getInventory()
    }, [])

    //TABLE
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => inventory, [inventory])

    //add a column with a button
    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: 'addCart',
                Header: 'Acción',
                Cell: ({ row }) => (
                    <button >
                        Info
                    </button>
                )
            }
        ])
    }

    const tableInstance = useTable(
        {
            columns,
            data
        },
        useGlobalFilter,
        tableHooks,
        useSortBy
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        preGlobalFilteredRows,
        setGlobalFilter,
        state
    } = tableInstance;


    return (
        <div>Inventory</div>
    )
}

export default Inventory