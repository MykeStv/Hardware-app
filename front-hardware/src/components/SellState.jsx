import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from './ItemCard'
// import ClientForm from './ClientForm'
import InputClient from './InputClient'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'

const SellState = () => {

    const emptyClient = { name: '', document: '' }

    const products = useSelector((state) => state.sell.products)
    const [client, setClient] = useState(emptyClient)
    const dispatch = useDispatch()
    // console.log(products);
    const { generateInvoice, sellProduct } = bindActionCreators(actionCreators, dispatch)

    let total = 0;
    products.forEach(element => {
        total += element.price * element.quantity
    });


    const handleInvoice = () => {
        const data = {
            employee: 'myke',
            client: client,
            products: products
        }

        generateInvoice(data)
        sellProduct(products)

        setClient(emptyClient)
    }


    return (
        <>
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
                    <InputClient setClient={setClient} client={client} />
                    <p className='total_sell'>Total: <span>${total}</span></p>

                    <button className='btn_generate' onClick={handleInvoice}>
                        Generar Factura
                    </button>
                </div>

            </div>
            {/* <ClientForm show={showForm} closeHandler={closeForm} /> */}
        </>
    )
}

export default SellState