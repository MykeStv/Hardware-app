import React from 'react'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="header">
                <img src="" alt="" />
                <h3>Don Raul</h3>
            </div>
            <div className='elements'>
                <ul className='list'>
                    <li className='item'>Principal</li>
                    <li className='item'>Inventario</li>
                    <li className='item'>Clientes</li>
                </ul>
                <div className='item'>Perfil</div>
            </div>
        </div>
    )
}

export default Sidebar