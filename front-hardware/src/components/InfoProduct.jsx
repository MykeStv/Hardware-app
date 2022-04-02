import React from 'react'
import { useSelector } from 'react-redux';
import Style from '../assets/style/style.scss'

const InfoProduct = () => {

    const product = useSelector((state) => state.infoProduct.product)
    console.log(product);

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
                <div className='info_btn'>
                    <button>Editar</button>
                </div>

            </div>
        </div>
    )
}

export default InfoProduct