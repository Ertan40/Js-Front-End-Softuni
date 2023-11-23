function solve() {
   const addButtons = Array.from(document.querySelectorAll(".add-product"));
   // const buttons = [...document.querySelectorAll('button[class=add-product]')];
   const checkoutButton = document.querySelector(".checkout");
   const textArea = document.querySelector("textarea");

   let cart = []
   let totalPrice = 0

   addButtons.forEach(button => {
      button.addEventListener("click", (event) => {
         let productDiv = event.target.parentElement.parentElement
         let product = productDiv.querySelector(".product-title").textContent // Milk
         let price = parseFloat(productDiv.querySelector(".product-line-price").textContent) // 1.09
         textArea.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`
         cart.push({name: product})
         totalPrice += price
         // console.log(textArea); // Added Milk for 1.09 to the cart.
      })
   });
   
   checkoutButton.addEventListener("click", checkout)
   function checkout() {
      let uniqueProducts = [...new Set(cart.map(product => product.name))]
      textArea.value += `You bought ${uniqueProducts.join(", ")} for ${totalPrice.toFixed(2)}.`
      // Also, after clicking over "Checkout" and every from above is done you should disable all buttons. 
     checkoutButton.disabled = true
     addButtons.forEach(button => {
         button.disabled = true 
     });
   }
}


