function addLike(button, el) {
  if (button.innerHTML == "Like") {
    button.innerHTML = "Unliked";
    document.getElementById(el).innerHTML++;
  } else {
    document.getElementById(el).innerHTML--;
    button.innerHTML = "Like";
  }
}
