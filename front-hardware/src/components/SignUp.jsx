import React from 'react'

const SignUp = () => {
    return (
        <div className='signup_page'>

            <form className='signup_card'>

                <div className='signup_header'>
                    <h1>Registrar Usuario</h1>
                </div>

                <div className="signup_body">
                    <label>
                        <p>Nombre</p>
                        <input type="text" placeholder='nombre del empleado' required />
                    </label>
                    <label>
                        <p>Rol</p>
                        <input type="text" placeholder='rol del empleado' required />
                    </label>
                    <label>
                        <p>Correo</p>
                        <input type="email" placeholder='correo' required />
                    </label>
                    <label>
                        <p>Contraseña</p>
                        <input type="password" placeholder='contraseña' minLength='6' required />
                    </label>
                </div>

                <div className='signup_footer'>
                    <button className='signup_btn'>Registrar</button>
                </div>

            </form>
            <span className='signup_text'>¿Tienes una cuenta? Iniciar sesion</span>

        </div>
    )
}

export default SignUp