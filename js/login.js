

var register = function (e) {
  e.preventDefault();
  console.log(window.location);
  window.location = window.location.origin + '/views/register.html';
};

var login = function (e) {
  e.preventDefault();
  console.log(window.location);
  window.location = window.location.origin + '/views/personality.html';
};

document.getElementById('btnRegister').addEventListener("click", register);
document.getElementById('btnLogin').addEventListener("click", login);
