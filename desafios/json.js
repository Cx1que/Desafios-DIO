let invoice = {
    name: "Caique",
    age: 19,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["teclado mecanico", 129.99],
        2: ["monitor", 899.99]
    },
}

console.log(invoice.products[2])

let name = "Caíque"
let age = 19
let products = ["Mouse 2xwm", "Teclado mecânico", "Monitor"]
let productsValues = ["29.90", "129.99", "899.99"]

function generateInvoice(invoice){
console.log(`o comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("-------------------")
    for (const index in invoice.products){
        let [productName, productprice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productprice}`)
    }
}

generateInvoice(invoice)