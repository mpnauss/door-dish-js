
const pizza = 15.0
const extraCheese = 2.0
const deliveryFee = 3.0
let driverTip = 0.0

let acquisitionMethod = prompt(`Hello and welcome to Pizza Planet!
Will this order be for takeout or delivery?
There is a $${deliveryFee} fee for delivery.`).toLowerCase()

while ( acquisitionMethod !== "takeout" && acquisitionMethod !== "delivery" ) {
    acquisitionMethod = prompt('Please enter "takeout" or "delivery"')
}

let pizzaAmount = prompt(`How many pizzas would you like to order?\nPizzas are $${pizza} each.`)
while ( !/^\d*$/.test(pizzaAmount) ) {
    pizzaAmount = prompt(`${pizzaAmount} is not a valid number.\
Please enter the number of pizzas you would like to order:`)
}
pizzaAmount = parseInt(pizzaAmount)

let addCheese = prompt(`Would you like extra cheese on your pizza? There is a $${extraCheese} charge. 
Answer "yes" or "no":`).toLowerCase()
while ( addCheese !== "yes" && addCheese !== "no") {
    addCheese = prompt('Do you want extra cheese?\nPlease answer "yes" or "no".')
}

// Price for just pizza
let subtotal = (pizza * pizzaAmount)
let itemizedReceipt = `\n${pizzaAmount} pizza(s): ${(pizzaAmount * pizza).toFixed(2)}\n`

// add price for extra cheese
if ( addCheese === "yes") {
    subtotal += (extraCheese * pizzaAmount)
    itemizedReceipt = itemizedReceipt + `Extra cheese: ${(extraCheese * pizzaAmount).toFixed(2)}\n`
}

// Ask for tip if delivered
if ( acquisitionMethod === "delivery") {
    subtotal += deliveryFee
    itemizedReceipt = itemizedReceipt + `Delivery fee: ${deliveryFee.toFixed(2)}\n`

    driverTip = prompt(`The cost of your pizzas will be $${subtotal.toFixed(2)}.
If you would like to include a tip for your driver please enter the amount here,\ 
or click "cancel" to continue without a tip:`)
    while ( driverTip !== null && !/^\d*\.?\d*$/.test(driverTip)) {
        driverTip = prompt(`${driverTip} is not a valid amount.
        If you would like to include a tip for your driver please enter the amount here,\ 
        or click "cancel" to continue without a tip:`)
    }
    if (driverTip !== null) {
        subtotal += parseFloat(driverTip)
        itemizedReceipt = itemizedReceipt + `Tip: ${(parseFloat(driverTip)).toFixed(2)}`
    }
}

// put total on receipt
itemizedReceipt = itemizedReceipt + `\nTotal: $${subtotal.toFixed(2)}`

let confirmationString

if (pizzaAmount === 1) {
    confirmationString = 'We are preparing your pizza'
} else {
    confirmationString = `We are preparing your ${pizzaAmount} pizzas`
}

if (addCheese === "yes") {
    confirmationString = confirmationString + ' with extra cheese'
} else {
    confirmationString = confirmationString + ' with no extra cheese'
}

if (acquisitionMethod === "delivery" ) {
    confirmationString = confirmationString + ' to be delivered.'
} else {
    confirmationString = confirmationString + ' to be picked up at our door.'
}

alert(confirmationString + '\n' + itemizedReceipt)