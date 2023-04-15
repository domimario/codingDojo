const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers; 
const [, , , second] = numbers; 
const [, , , , , , , , third] = numbers; 
//Predict the output
console.log(first == second); 
console.log(first == third);

//the first will output false because the value of first is "2 " and the value of second is "5"

//the second console output will be true because the value of firs is "2" and the value of third is "2" also
