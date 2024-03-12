import { getProducts } from "./database.js"


export const Products = () => {
    let html = "<ul>"
    const products = getProducts()

    for (const product of products) {
        html += `<li>${product.name}</li>`
    }

    html += "</ul>"

    return html
}

