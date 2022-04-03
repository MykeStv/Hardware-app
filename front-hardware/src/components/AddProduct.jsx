import React, { useState } from 'react'

const AddProduct = ({ cancelAdding, applyAdding }) => {

    const initialProduct = {
        productName: '',
        price: 0,
        section: '',
        stock: 0,
        maxStock: 0,
        description: '',
    }

    const [product, setProduct] = useState(initialProduct)


    const handleOnChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() // doesn't allows to recharge all page with form submit
        // console.log(product);
        applyAdding(product)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='info_container adding'>
                {/* <label className='info_element'>
                    <h4>Id</h4>
                    <input type="text" placeholder='id' disabled />
                </label> */}
                <label htmlFor="" className='info_element'>
                    <h4>Nombre</h4>
                    <input type="text" placeholder='nombre' onChange={handleOnChange} name='productName' />
                </label>
                <label className='info_element'>
                    <h4>Sección</h4>
                    <input type="text" placeholder='sección' onChange={handleOnChange} name='section' />
                </label>
                <label className='info_element'>
                    <h4>Precio</h4>
                    <input type="text" placeholder='precio' onChange={handleOnChange} name='price' />
                </label>
                <label className='info_element'>
                    <h4>Stock</h4>
                    <input type="text" placeholder='stock' onChange={handleOnChange} name='stock' required />
                </label>
                <label className='info_element'>
                    <h4>Máximo</h4>
                    <input type="text" placeholder='max stock' onChange={handleOnChange} name='maxStock' required />
                </label>
            </div>

            <div className='info_btn'>
                <button onClick={cancelAdding}>
                    Cancelar
                </button>
                <button className='btn_apply' type='submit'>
                    Agregar
                </button>
            </div>
        </form>
    )
}

export default AddProduct