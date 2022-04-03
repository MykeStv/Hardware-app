import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'
import { COLUMNS_INVENTARIO } from '../constants/columns'
import TableComp from '../components/TableComp'
import InfoProduct from '../components/InfoProduct'
import { BiTrashAlt } from "react-icons/bi";

const Inventory = () => {

    const inventory = useSelector((state) => state.inventory.products)
    const dispatch = useDispatch()

    const { getInventory, showProductInfo, deleteProduct } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getInventory()
    }, [])

    const showInfo = (value) => {
        // console.log(value);
        showProductInfo(value)
    }

    const handleDelete = (value) => {
        deleteProduct(value.id)
    }

    //TABLE
    const columns = useMemo(() => COLUMNS_INVENTARIO, [])
    const data = useMemo(() => inventory, [inventory])


    //add a column with a button
    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: 'addCart',
                Header: 'Acción',
                Cell: ({ row }) => (
                    <div className='inventory_actions'>
                        <button onClick={() => showInfo(row.values)}>
                            Info
                        </button>
                        <button className='btn_delete' onClick={() => handleDelete(row.values)}>
                            <BiTrashAlt />
                        </button>
                    </div>
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