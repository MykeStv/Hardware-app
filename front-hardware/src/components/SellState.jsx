import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ItemCard from './ItemCard'

const SellState = () => {

    const products = useSelector((state) => state.sell.products)

    let total = 0;
    products.forEach(element => {
        total += element.price * element.quantity
    });

    return (
        <div className='sellstate'>
            <div className='header'>
                <h4 className='title'>Estado Venta</h4>
                <div className='counter'>
                    {products.length}

                </div>
            </div>
            <div className="body">
                <span>Products</span>
                {
                    products.map(item => (
                        <ItemCard
                            key={item.id}
                            id={item.id}
                            name={item.productName}
                            price={item.price}
                            stock={item.stock}
                            quantity={item.quantity}
                        />
                    ))
                }
            </div>
            <div className='footer_sell'>
                <p className='total_sell'>Total: <span>${total}</span></p>
                <button className='btn_generate'>Generar Factura</button>
            </div>
        </div >
    )
}

export default SellState