function changeName() {
  var createElement = document.querySelector(".card-body");
  var newText = createElement.firstElementChild;
  newText.innerHTML = "Beta Plan ";
}

var decrease = 2;
var increase = 500;

function removeRequest() {
  decrease--;
  var getElement = document.querySelector(".card-list-item");
  var changeElement = document.querySelector(".badge");
  getElement.remove();
  changeElement.innerHTML = decrease;
}

var increase = 500;
function addRequest() {
  increase++;
  var getElement = document.querySelector(".card-list-item");
  var changeElement = document.querySelector("#request-num");
  var changeElement1 = document.querySelector(".badge");
  getElement.remove();
  changeElement.innerHTML = increase;
  changeElement1.innerHTML = decrease;
}
