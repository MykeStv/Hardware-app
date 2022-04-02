import React from 'react'
import { BiHome, BiFile } from "react-icons/bi";
import { FaBoxes } from "react-icons/fa";
import { BsPersonBadge, BsPeople } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="header">
                <img src="" alt="" />
                <h3>Don Raul</h3>
            </div>
            <div className='elements'>
                <ul className='list'>
                    <NavLink
                        to={'/'}
                        className={({ isActive }) => 'nav_link' + (isActive ? ' activated' : '')}

                    >
                        <BiHome className='icon' />
                        <span>Principal</span>
                    </NavLink>
                    <NavLink
                        to={'/inventory'}
                        className={({ isActive }) => 'nav_link' + (isActive ? ' activated' : '')}
                    >
                        <FaBoxes className='icon' />
                        <span>Inventario</span>
                    </NavLink>
                    <NavLink
                        to={'/invoice'}
                        className={({ isActive }) => 'nav_link' + (isActive ? ' activated' : '')}
                    >
                        <BiFile className='icon' />
                        <span>Facturas</span>
                    </NavLink>
                    <NavLink
                        to={'/client'}
                        className={({ isActive }) => 'nav_link' + (isActive ? ' activated' : '')}
                    >
                        <BsPeople className='icon' />
                        <span>Clientes</span>
                    </NavLink>
                </ul>
                <NavLink
                    to={'/profile'}
                    className={({ isActive }) => 'nav_link' + (isActive ? ' activated' : '')}
                >
                    <BsPersonBadge className='icon' />
                    <span>Perfil</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar