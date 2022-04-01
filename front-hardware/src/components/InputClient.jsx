import React from 'react'

const InputClient = ({ setClient }) => {

    const handleNameClient = (e) => {
        setClient(prevCliente => prevCliente = { ...prevCliente, name: e.target.value })
    }
    const handleDocClient = (e) => {
        setClient(prevCliente => prevCliente = { ...prevCliente, document: e.target.value })
    }


    return (
        <>
            <form className='input_client'>
                <input type="text" placeholder='Nombre cliente' onChange={handleNameClient} />
                <input type="text" placeholder='Documento cliente' onChange={handleDocClient} />
            </form>
        </>
    )
}

export default InputClient