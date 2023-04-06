function myBirthYearFunc() {
  console.log("I was born in " + 1980);
}
// It will show the following state : I was born in 1980


function myBirthYearFunc(birthYearInput) {
  console.log("I was born in " + birthYearInput);
}
// It will show the following state : I was born in + the year that you put at birthdayInput


function add(num1, num2) {
  console.log("Summing Numbers!");
  console.log("num1 is: " + num1);
  console.log("num2 is: " + num2);
  var sum = num1 + num2;
  console.log(sum);
}

// It will show the following state : 
// Summing Numbers!
// num1 is: 10
// num2 is: 20
// 30