import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const EditProduct = ({ productData, cancelEditing, applyEditing }) => {

    const [product, setProduct] = useState(productData)
    //const product = useSelector((state) => state.infoProduct.product)
    // console.log(dataProd);

    const handleChangeId = (e) => {
        setProduct({
            ...product, id: e.target.value
        })
    }
    const handleChangeName = (e) => {
        setProduct({
            ...product, productName: e.target.value
        })
    }
    const handleChangeSection = (e) => {
        setProduct({
            ...product, section: e.target.value
        })
    }
    const handleChangePrice = (e) => {
        setProduct({
            ...product, price: e.target.value
        })
    }
    const handleChangeStock = (e) => {
        setProduct({
            ...product, stock: e.target.value
        })
    }
    const handleChangeMaxStock = (e) => {
        setProduct({
            ...product, maxStock: e.target.value
        })
    }

    // console.log(product);

    return (
        <>
            <form className='info_container editing'>

                <label htmlFor="" className='info_element'>
                    <h4>Id</h4>
                    <input type="text" defaultValue={product.id} onChange={handleChangeId} disabled />
                </label>
                <label htmlFor="" className='info_element'>
                    <h4>Nombre</h4>
                    <input type="text" defaultValue={product.productName} onChange={handleChangeName} />
                </label>
                <label className='info_element'>
                    <h4>Sección</h4>
                    <input type="text" defaultValue={product.section} onChange={handleChangeSection} />
                </label>
                <label className='info_element'>
                    <h4>Precio</h4>
                    <input type="text" defaultValue={product.price} onChange={handleChangePrice} />
                </label>
                <label className='info_element'>
                    <h4>Stock</h4>
                    <input type="text" defaultValue={product.stock} onChange={handleChangeStock} />
                </label>
                <label className='info_element'>
                    <h4>Máximo</h4>
                    <input type="text" defaultValue={product.maxStock} onChange={handleChangeMaxStock} required />
                </label>

            </form>
            <div className='info_btn'>
                <button onClick={cancelEditing}>
                    Cancelar
                </button>
                <button className='btn_apply' onClick={() => applyEditing(product)}>
                    Aplicar
                </button>
            </div>
        </>
    )
}

export default EditProduct