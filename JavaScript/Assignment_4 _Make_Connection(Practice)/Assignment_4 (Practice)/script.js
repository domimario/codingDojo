function changeName(el) {
  document.getElementById(el).innerHTML = "BETA PLAN";
}

function removeRequest(el) {
  document.getElementById(el).remove();
  document.querySelector("#requestNum").innerHTML--;
}

function addConection(el) {
  document.getElementById(el).remove();
  document.querySelector("#conect").innerHTML++;
  document.querySelector("#requestNum").innerHTML--;
}
