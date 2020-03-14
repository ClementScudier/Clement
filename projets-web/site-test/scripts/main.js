let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Bonjour, ' + myName;
}
if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Bonjour, ' + storedName + ' et Bienvenue sur le site de Clement!!';
}
myButton.addEventListener('click', function() {
  setUserName();
});
