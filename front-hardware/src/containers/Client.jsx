import React from 'react'
import { generatePDF } from '../document/pdfInvoice'


const Client = () => {

    const arr = ["p1", 'p2', 'p3']

    return (
        <div className='client_page'>
            Client
            <button onClick={() => generatePDF(arr)}>generar pdf</button>
        </div>
    )
}

export default Client