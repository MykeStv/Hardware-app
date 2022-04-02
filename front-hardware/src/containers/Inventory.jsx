import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'
import { COLUMNS } from '../constants/columns'
import TableComp from '../components/TableComp'
import InfoProduct from '../components/InfoProduct'

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


    return (
        <div className='inventory_page'>
            <TableComp
                classname='table_inventory'
                columns={columns} data={data} tableHooks={tableHooks}
            />
            <InfoProduct />
        </div>
    )
}

export default Inventory