import { getProducts } from "./database.js"

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        const products = getProducts()
        if (whatWasClickedOn.dataset.type == "product"){
            window.alert(`${whatWasClickedOn.dataset.name} is priced ${whatWasClickedOn.dataset.price}`)
        }
    }
)


export const Products = () => {
    let html = "<ul>"
    const products = getProducts()

    for (const product of products) {
        html += `<li data-type="product"
        data-price="${product.price}"
        data-name="${product.name}"
        >${product.name}</li>`
    }

    html += "</ul>"

    return html
}

