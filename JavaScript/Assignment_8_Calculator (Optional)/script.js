var putNumber = document.querySelector("#display");
var num1 = "";
var num2 = "";
var op = "";

function press(num) {
  num1 += num;
  putNumber.innerHTML = num1;
}

function clr() {
  num1 = "";
  num1 = "";
  num2 = "";
  op = "";
  putNumber.innerHTML = "0";
}

function setOP(key) {
  op = key;
  num2 = num1;
  num1 = "";
}

function calculate(){
    
}