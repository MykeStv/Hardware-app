import React from 'react'

const dataProduct = ({ product, toEditing, toAdding }) => {


    return (
        <>
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
                    {
                        product.price == null ? '' :
                            <span>${product.price}</span>
                    }
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

            <div className='info_btn'>
                <button onClick={toEditing}>
                    Editar
                </button>
                <button onClick={toAdding}>
                    Agregar
                </button>
            </div>
        </>

    )
}

export default dataProduct