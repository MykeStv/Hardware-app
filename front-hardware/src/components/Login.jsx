import React from 'react'

const Login = () => {

    const handleLoginSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className='login_page'>

            <form className='card' onSubmit={handleLoginSubmit}>

                <div className='header'>
                    <h1>Registrar Usuario</h1>
                </div>

                <div className="body">
                    <label>
                        <p>Correo</p>
                        <input type="email" placeholder='correo' required />
                    </label>
                    <label>
                        <p>Contraseña</p>
                        <input type="password" placeholder='contraseña' minLength='6' required />
                    </label>
                </div>

                <div className='login_footer'>
                    <button className='signup_btn' type='submit'>Ingresar</button>
                </div>

            </form>
            <span className='text'>¿No tienes una cuenta? registrar</span>

        </div>
    )
}

export default Login