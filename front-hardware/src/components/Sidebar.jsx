import React from 'react'
import { BiHome, BiFile } from "react-icons/bi";
import { FaBoxes } from "react-icons/fa";
import { BsPersonBadge, BsPeople } from "react-icons/bs";
import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import Inventory from '../containers/Inventory';
import Invoice from '../containers/Invoice';
import Client from '../containers/Client';
import Profile from '../containers/Profile';



const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className="header">
                    <h1 className='title_logo'>DR</h1>
                    <h3>Don Raul</h3>
                </div>
                <div className='elements'>
                    <ul className='list'>
                        <NavLink
                            to={''}
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
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path='inventory' element={<Inventory />} />
                <Route path='/invoice' element={<Invoice />} />
                <Route path='/client' element={<Client />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </>
    )
}

export default Sidebar