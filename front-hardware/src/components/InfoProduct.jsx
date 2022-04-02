import React from 'react'
import Style from '../assets/style/style.scss'

const InfoProduct = () => {


    const colorFuxia = Style.colorGreen2;

    const porcentage = 50;

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

                    <p className='porcentage'>50<span>%</span></p>

                </div>

                <div className='info_container'>
                    <div className='info_element'>
                        <h4>id</h4>
                        <span>asdas</span>
                    </div>
                    <div className='info_element'>
                        <h4>nombre</h4>
                        <span>asdas</span>
                    </div>
                    <div className='info_element'>
                        <h4>seccion</h4>
                        <span>herramienta</span>
                    </div>
                    <div className='info_element'>
                        <h4>precio</h4>
                        <span>500</span>
                    </div>
                    <div className='info_element'>
                        <h4>stock</h4>
                        <span>12</span>
                    </div>
                    <div className='info_element'>
                        <h4>Descripion</h4>
                        <span>asdas</span>
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