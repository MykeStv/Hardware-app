import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'
import SellState from '../components/SellState'
import Table from '../components/Table'
import { COLUMNS } from '../constants/columns'

const Dashboard = () => {

    const inventory = useSelector((state) => state.inventory.products)
    const dispatch = useDispatch()
    // console.log(inventory)

    const { getInventory } = bindActionCreators(actionCreators, dispatch)

    // const data = inventory;
    console.log(inventory);

    useEffect(() => {
        getInventory()
    }, [])

    //avoid recreating every render data
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => inventory, [inventory])

    // console.log(data);


    return (
        <div className='dashboard'>
            <Table columns={columns} data={data} />
            <SellState />
        </div>

    )
}

export default Dashboard