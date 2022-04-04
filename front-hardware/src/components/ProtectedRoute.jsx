import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'

const ProtectedRoute = () => {

    const authState = useSelector((state) => state.authentication.authState)

    // const authState = JSON.parse(sessionStorage.auth)
    // console.log(authState);
    /* 
        const isAuth = () => {
            if (authState === null || authState === undefined) {
                return false;
            } else {
                return true
            }
        } */

    if (!authState) {
        return <Navigate to='/login' replace />
    }


    return (
        <Routes>

            {/* <Route
                path='*'
                element={isAuth ? <Sidebar /> : <Navigate to='/login' replace />}
            /> */}

            <Route path="/*" element={<Sidebar />} />

        </Routes>
    )
}

export default ProtectedRoute