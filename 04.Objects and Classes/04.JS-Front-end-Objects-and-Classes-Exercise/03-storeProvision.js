function main (stock, orders) {
   let products = {}
   for (let index = 0; index < stock.length; index += 2) {
    let product = stock[index]
    let quantity = parseInt(stock[index + 1])
    products[product] = quantity
   }
   for (let index = 0; index < orders.length; index += 2) {
    let product = orders[index]
    let quantity = parseInt(orders[index + 1])
    if (product in products) {
        products[product] += quantity 
    } else {
        products[product] = quantity
    } 
   }
   for (let key in products) {
       console.log(`${key} -> ${products[key]}`)
   }
//    for (const [product, quantity] of Object.entries(products)) {
//     console.log(`${product} -> ${quantity}`)
//    }
}
main (['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])