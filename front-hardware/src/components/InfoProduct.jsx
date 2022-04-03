import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Style from '../assets/style/style.scss'
import EditProduct from './EditProduct';
import DataProduct from './DataProduct';

const InfoProduct = () => {

    const product = useSelector((state) => state.infoProduct.product)
    const [isEditing, setIsEditing] = useState(false)
    console.log(isEditing);

    useEffect(() => {
        setIsEditing(false)
    }, [product])

    const colorFuxia = Style.colorGreen2;

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    const porcentage = isEmpty(product) ? 0 : Math.round((product.stock / product.maxStock) * 100);

    const circle2 = {
        stroke: colorFuxia,
        strokeDashoffset: `calc(352 - (352 * ${porcentage}) / 100)`,
        filter: `drop-shadow(0 0 5px ${colorFuxia})`,

    }

    const toEditing = () => {
        setIsEditing(true)
    }

    const cancelEditing = () => {
        setIsEditing(false)
    }


    return (
        <div className='info_product'>
            <div className='info_card'>

                <div className='info_graph'>

                    <svg>
                        <circle cx='74' cy='74' r='56' />
                        <circle cx='74' cy='74' r='56' style={circle2} />
                    </svg>

                    <p className='porcentage'>{porcentage}<span>%</span></p>

                </div>
                {

                    !isEditing ?
                        <>
                            <DataProduct product={product} />
                            <div className='info_btn'>
                                <button onClick={toEditing}>
                                    Editar
                                </button>
                            </div>
                        </>

                        :
                        <>
                            <EditProduct productData={product} />
                            <div className='info_btn'>
                                <button onClick={cancelEditing}>
                                    Cancelar
                                </button>
                            </div>
                        </>

                }




            </div>
        </div>
    )
}

export default InfoProduct