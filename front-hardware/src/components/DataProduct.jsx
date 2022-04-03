import React from 'react'

const dataProduct = ({ product }) => {

    console.log(product);

    return (
        <div className='info_container'>
            <div className='info_element'>
                <h4>Id</h4>
                <span>{product.id}</span>
            </div>
            <div className='info_element'>
                <h4>Nombre</h4>
                <span>{product.productName}</span>
            </div>
            <div className='info_element'>
                <h4>Sección</h4>
                <span>{product.section}</span>
            </div>
            <div className='info_element'>
                <h4>Precio</h4>
                <span>${product.price}</span>
            </div>
            <div className='info_element'>
                <h4>Stock</h4>
                <span>{product.stock}</span>
            </div>
            <div className='info_element'>
                <h4>Máximo</h4>
                <span>{product.maxStock}</span>
            </div>
        </div>
    )
}

export default dataProduct