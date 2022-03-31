import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'
import { COLUMNS } from '../constants/columns'

const Dashboard = () => {

    const inventory = useSelector((state) => state.inventory)
    const dispatch = useDispatch()
    // console.log(inventory)

    const { getInventory } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getInventory()
    }, [])

    //avoid recreating every render data
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => inventory, [inventory])

    // console.log(data);

    const addCart = (value) => {
        console.log(value);
    }

    //add a column with a button
    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: 'addCart',
                Header: 'Agregar Producto',
                Cell: ({ row }) => (
                    <button onClick={() => addCart(row.values)}>
                        Agregar
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
        tableHooks
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;

    return (
        <div className='dashboard'>
            <div>Search</div>
            <div>Filter</div>
            <div className='products_container'>
                <table {...getTableProps()}>
                    <thead>
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            rows.map((row) => {
                                prepareRow(row)

                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        ))}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Dashboard