import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../App'


const SignUp = () => {

    const initialUser = {
        email: '',
        password: ''
    }

    const [user, setUser] = useState(initialUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { signup } = bindActionCreators(actionCreators, dispatch)

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        signup(user.email, user.password)

        setUser(initialUser)
    }

    const handleNavigate = () => {
        navigate('/login')
    }

    return (
        <div className='signup_page'>

            <form className='card' onSubmit={handleRegisterSubmit}>

                <div className='header'>
                    <h1>Registrar Usuario</h1>
                </div>

                <div className="body">
                    <label>
                        <p>Nombre</p>
                        <input type="text" placeholder='nombre del empleado' />
                    </label>
                    {/* <label>
                        <p>Rol</p>
                        <input type="text" placeholder='rol del empleado' required />
                    </label> */}
                    <label>
                        <p>Correo</p>
                        <input type="email" placeholder='correo' onChange={handleChange} name='email' required />
                    </label>
                    <label>
                        <p>Contraseña</p>
                        <input type="password" placeholder='contraseña' onChange={handleChange} name='password' minLength='6' required />
                    </label>
                </div>

                <div className='signup_footer'>
                    <button className='signup_btn' type='submit'>Registrar</button>
                </div>

            </form>
            <p className='text'>¿Tienes una cuenta? <span onClick={handleNavigate}>Iniciar sesion</span></p>

        </div>
    )
}

export default SignUp