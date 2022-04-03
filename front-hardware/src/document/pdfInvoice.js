import jsPDF from "jspdf"

export const generatePDF = (invoice) => {

    let doc = new jsPDF('p', 'pt')

    doc.setFontSize(22)
    doc.text('DON RAUL - FERRETERIA', 20, 40)
    // doc.addFont('helvetica', 'normal')
    doc.setFontSize(16)
    doc.text('FACTURA DE COMPRA', 20, 80)
    doc.setFontSize(14)
    doc.text(`Factura id: ${invoice.id}`, 20, 100)
    doc.text(`Fecha: ${invoice.date}`, 20, 120)
    doc.text(`Empleado: ${invoice.employee}`, 20, 140)
    doc.text(`Cliente nombre: ${invoice.client.name}`, 20, 160)
    doc.text(`Cliente documento: ${invoice.client.document}`, 20, 180)
    
    doc.setFontSize(16)
    doc.text(`PRODUCTOS `, 20, 220)

    doc.setFontSize(14)
    let space_y = 220;
    invoice.products.forEach((p, i) => {
        space_y += 20
        doc.text(`${i+1} ${p.productName} $${p.price} x${p.quantity} total: $${p.price * p.quantity}`, 40, space_y)
    })

    doc.setFontSize(16)
    doc.text(`TOTAL:  $${invoice.total}`, 20, space_y + 40)
    
    doc.save('demo.pdf')

}


/* const arrangeProducts = (array) => {
    array.forEach((p, i) => {
        doc.text(`${p}`, 40, 240 + i*20)
    })
} */