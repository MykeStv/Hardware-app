import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'

const Profile = () => {

    const authState = useSelector((state) => state.authentication.authState)


    const dispatch = useDispatch()
    const { signOutAction } = bindActionCreators(actionCreators, dispatch)

    const handleSignOut = () => {
        signOutAction()
    }

    return (
        <div className='profile_page'>
            <div className="profile_container">
                <div className="profile_header">
                    <h2>Usuario</h2>
                </div>
                <div className="profile_body">
                    <p>{authState.email}</p>
                </div>
                <div className="profile_footer">
                    <button onClick={handleSignOut}>Cerrar Sesion</button>
                </div>
            </div>
        </div>
    )
}

export default Profile