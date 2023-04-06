function randomPizza() {
  var crustTypes = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
  var sauceTypes = ["traditional", "marinara", "barbecue", "alfredo"];
  var cheeses = [
    "mozzarella",
    "feta",
    "cheddar",
    "parmesan",
    "asiago",
    "ricotta",
  ];
  var toppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
    "chicken",
    "bacon",
    "pineapple",
    "spinach",
    "artichoke",
    "garlic",
  ];

  var pizza = {};
  pizza.crustType = crustTypes[Math.floor(Math.random() * crustTypes.length)];
  pizza.sauceType = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
  pizza.cheeses = [cheeses[Math.floor(Math.random() * cheeses.length)]];
  pizza.toppings = [
    toppings[Math.floor(Math.random() * toppings.length)],
    toppings[Math.floor(Math.random() * toppings.length)],
  ];

  return pizza;
}

var randomPizza1 = randomPizza();
console.log(randomPizza1);
var randomPizza2 = randomPizza();
