

var GoLogin = function (e) {
  e.preventDefault();
  console.log(window.location);
  window.location = window.location.origin + '/index.html';
}

document.getElementById('linkGoLogin').addEventListener("click", GoLogin);
