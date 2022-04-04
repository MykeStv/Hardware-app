import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'


const Login = () => {

    const initialUser = {
        email: '',
        password: ''
    }
    const [user, setUser] = useState(initialUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { login } = bindActionCreators(actionCreators, dispatch)



    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()

        login(user.email, user.password)

    }

    const handleNavigate = () => {
        navigate('/signup')
    }

    return (
        <div className='login_page'>

            <form className='card' onSubmit={handleLoginSubmit}>

                <div className='header'>
                    <h1>Iniciar Sesión</h1>
                </div>

                <div className="body">
                    <label>
                        <p>Correo</p>
                        <input type="email" placeholder='correo' onChange={handleChange} name='email' required />
                    </label>
                    <label>
                        <p>Contraseña</p>
                        <input type="password" placeholder='contraseña' onChange={handleChange} name='password' minLength='6' required />
                    </label>
                </div>

                <div className='login_footer'>
                    <button className='login_btn' type='submit'>Ingresar</button>
                </div>

            </form>
            <p className='text'>¿No tienes una cuenta? <span className='to_register' onClick={handleNavigate}>Registrar</span></p>

        </div>
    )
}

export default Login