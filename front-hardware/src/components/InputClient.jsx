import React, { useState } from 'react'

const InputClient = ({ setClient, client }) => {

    let name = client.name;
    let document = client.document;


    const handleNameClient = (e) => {
        setClient(prevCliente => prevCliente = { ...prevCliente, name: e.target.value })
    }
    const handleDocClient = (e) => {
        setClient(prevCliente => prevCliente = { ...prevCliente, document: e.target.value })
    }


    return (
        <>
            <form className='input_client'>
                <input type="text" placeholder='Nombre cliente' onChange={handleNameClient} value={name} />
                <input type="text" placeholder='Documento cliente' onChange={handleDocClient} value={document} />
            </form>
        </>
    )
}

export default InputClient