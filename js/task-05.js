//////////////////////////////////////////////////////////////////////////////
// Exercitiul 5:
//////////////////////////////////////////////////////////////////////////////

// Scrieți un script care, atunci când se introduce un text în input#name-input (evenimentul input), înlocuiește valoarea lui span#name-output cu valoarea curentă din input#name-input. Dacă input-ul este gol, în acel span se va afișa "Anonymous".

//////////////////////////////////////////////////////////////////////////////

const usernameInputField = document.getElementById('name-input');
const greetingUsername = document.getElementById('name-output');

usernameInputField.addEventListener('input', function() {
  const username = usernameInputField.value;
  greetingUsername.textContent = username;
});