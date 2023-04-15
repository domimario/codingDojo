const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;

console.log(name); // The first console output will be error because the name is not Defined
console.log(otherName); // The second console output will be "Elon"

//To fixed this we can do this : 
// but please comment or clear the line 8 , if you want to fixed and to see output.

const name = employee.name;
console.log(name);
