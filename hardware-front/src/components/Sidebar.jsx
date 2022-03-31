import React from 'react'
import { BiHome, BiFile } from "react-icons/bi";
import { FaBoxes } from "react-icons/fa";
import { BsPersonBadge, BsPeople } from "react-icons/bs";


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="header">
                <img src="" alt="" />
                <h3>Don Raul</h3>
            </div>
            <div className='elements'>
                <ul className='list'>
                    <li className='item'>
                        <BiHome className='icon' />
                        <span>Principal</span>
                    </li>
                    <li className='item'>
                        <FaBoxes className='icon' />
                        <span>Inventario</span>
                    </li>
                    <li className='item'>
                        <BiFile className='icon' />
                        <span>Facturas</span>
                    </li>
                    <li className='item'>
                        <BsPeople className='icon' />
                        <span>Clientes</span>
                    </li>
                </ul>
                <div className='item'>
                    <BsPersonBadge className='icon' />
                    <span>Perfil</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar