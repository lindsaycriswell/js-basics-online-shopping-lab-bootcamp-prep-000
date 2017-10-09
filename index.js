var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  var itemAndPrice = { [item]: price};
  cart.push(itemAndPrice);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var statement = "In your cart, you have";
  var phrases = [];

    for(var i = 0; i < cart.length; i++){
      var cartObject = cart[i];
      var cartItem = Object.keys(cart[i]);
      var price = cartObject[cartItem];
      var combo = `${cartItem} at $${price}`
      phrases.push(combo);
      }
        if (cart.length === 0) {
          console.log("Your shopping cart is empty.");
        } else if (cart.length === 1) {
          console.log(`${statement} ${phrases[0]}.`);
        } else if (cart.length === 2) {
          console.log(`${statement} ${phrases[0]} and ${phrases[1]}.`);
        } else {
          var lastItem = phrases.pop();
          console.log(`${statement} ${phrases.join(', ')}, and ${lastItem}.`);
        }
}
//
// function total() {
//   var total = 0;
//   for(var i = 0; i < cart.length; i++){
//     var cartObject = cart[i];
//     var cartItem = Object.keys(cartObject);
//     total += cartObject[cartItem];
//   }
//   return total;
// }
//
// function removeFromCart(item) {
//   for(var i = 0; i < cart.length; i++){
//     if(cart[i].hasOwnProperty(item)){
//       cart.splice(i,1);
//       return cart;
//     }
//   }
//   console.log("That item is not in your cart.")
//   return cart;
// }
//
// function placeOrder(cardNumber) {
//   if(cardNumber){
//     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
//     cart = [];
//   }
//   console.log("Sorry, we don't have a credit card on file for you.");
// }
