//Create function pizzaOven and return a Object

function pizzaOven(crustType, sauceType, cheese, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza;
}

// create a pizza with these elements
var pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
console.log(pizza1);

// create another pizza with these elements
var pizza2 = pizzaOven(
  "hand tosted",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(pizza2);

// create another pizza with these elements
var pizza3 = pizzaOven("proshute", "ketchup", "mozarella", [
  "mushroms",
  "sausage",
]);
console.log(pizza3);

// create another pizza with these elements
var pizza4 = pizzaOven("proshute", "mustard", "gruda", [
  "mushroms",
  "sausage",
  "onions",
]);
console.log(pizza4);

//Create a function called randomPizza that uses Math.random() to create a random pizza!

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomPizza() {
  var crustType = ["deep dish ", "gluten free", "thin and cripsy"];
  var sauceType = ["bbq", "traditional", "white sauce", "nacho chesse"];
  var cheese = ["mozarella", "cheddar", "feta", "swis cheeese", "blue chesse"];
  var toppings = ["pepperoni", "sausage", "chicken", "corn", "olivies"];

  var pizza = {};

  pizza.crustType = getRandom(crustType);
  pizza.sauceType = getRandom(sauceType);
  pizza.cheese = getRandom(cheese);
  pizza.toppings = [getRandom(toppings), getRandom(toppings)];
  return pizza;
}

console.log(randomPizza());
