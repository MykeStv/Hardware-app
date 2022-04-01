import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../App';
import GlobalFilter from './GlobalFilter';

const Table = ({ columns, data }) => {


    const dispatch = useDispatch()
    const { addSellItem } = bindActionCreators(actionCreators, dispatch)



    const addCart = (value) => {

        addSellItem(value)
    }

    /* function addCart(value) {
        console.log(dat);
        addSellItem(value)
    } */

    //add a column with a button
    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: 'addCart',
                Header: 'Acción',
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
        <div className='products_container'>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                setGlobalFilter={setGlobalFilter}
                globalFilter={state.globalFilter}
            />
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        {/* Add a sort direction indicator */}
                                        <span className='arrow_updown'>
                                            {
                                                column.isSorted ? (column.isSortedDesc ? ' ⯅' : ' ⯆') : ''
                                            }
                                        </span>
                                    </th>
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
    )
}

export default Table