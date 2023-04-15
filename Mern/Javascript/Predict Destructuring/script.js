const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar); // The first console will output " Tesla" , because take the first index of the array called cars
console.log(otherRandomCar); // The second console will output " Mercedes" , because take the second index of the array called cars
