import React from 'react'
import { useSelector } from 'react-redux'


const ProtectedRoute = () => {

    const authState = useSelector((state) => state.authentication.authState)


    return (
        <div>ProtectedRoute</div>
    )
}

export default ProtectedRoute