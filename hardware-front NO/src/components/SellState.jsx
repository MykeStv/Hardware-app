import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ItemCard from './ItemCard'

const SellState = () => {

    const products = useSelector((state) => state.sell.products)

    console.log(products);

    return (
        <div className='sellstate'>
            <div className='header'>
                <h4 className='title'>Estado Venta</h4>
                <div className='counter'>
                    {products.length}

                </div>
            </div>
            <div className="body">
                Products:
                {
                    products.map(item => (
                        <ItemCard
                            key={item.id}
                            id={item.id}
                            name={item.productName}
                            price={item.price}
                            stock={item.stock}
                        />
                    ))
                }
            </div>
            <div className='footer'>
                <p>Total: { }</p>
                <button className='generate'>Generar Factura</button>
            </div>
        </div>
    )
}

export default SellState