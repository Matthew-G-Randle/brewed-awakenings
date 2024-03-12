import { Orders } from "./Orders.js"
import { getEmployees, getOrders } from "./database.js"


document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        const sold = employeeOrders(whatWasClickedOn.dataset.id)
        if (whatWasClickedOn.dataset.type == "employee"){

            window.alert(`${whatWasClickedOn.dataset.name} sold ${sold} products`)

        }
    }
)


const employeeOrders = (id) => {
    let fulfilledOrders = 0
    const orders = getOrders();
    for (const order of orders) {
        if (order.employeeId == id) {
            fulfilledOrders++
        }
    }

    return fulfilledOrders
}



export const Employees = () => {
    let html = "<ul>"
    const employees = getEmployees()

    for (const employee of employees) {
        html += `<li data-type="employee"
        data-id="${employee.id}"
        data-name="${employee.name}"
        >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

