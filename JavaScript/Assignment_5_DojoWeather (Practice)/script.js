function showAlert() {
  alert("Loading weather report..");
}

function convertF() {
  let gradet = document.querySelectorAll(".grade");
  gradet.forEach((grade) => {
    grade.innerText =
      ((9 / 5) * parseInt(grade.innerText) + 32).toFixed(1) + "F";
  });
}
function convertC() {
  let gradet = document.querySelectorAll(".grade");
  gradet.forEach((grade) => {
    grade.innerText = (((parseInt(grade.innerText) - 32) * 5) / 9).toFixed(1);
  });
}

function removeCookies() {
  var removeCookies = document.querySelector("footer");
  removeCookies.remove();
}
