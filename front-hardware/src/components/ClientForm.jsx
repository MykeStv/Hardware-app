import React, { } from 'react'

const ClientForm = ({ show, closeHandler }) => {

    return (
        <div className='client_form'>
            <div className={show ? 'form_visible' : 'form_hidden'}>
                ClientForm
                <button onClick={closeHandler}>Cerrar</button>
            </div>
        </div>
    )
}

export default ClientForm