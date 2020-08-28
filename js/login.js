

var login = function (e) {
  e.preventDefault();
  window.location = '../views/register.html';
}

document.getElementById('login').addEventListener("click", login);

