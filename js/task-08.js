//////////////////////////////////////////////////////////////////////////////
// Exercitiul 8:
//////////////////////////////////////////////////////////////////////////////

// Scrieți un script de control al formularului de login.
// Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
// La trimiterea formularului, pagina nu trebuie să se reîncarce.
// Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
// Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectați valorile câmpului într-un obiect în care numele câmpului va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosiți proprietatea elements.
// Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset.

//////////////////////////////////////////////////////////////////////////////

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formFields = loginForm.elements;
  const credentials = {};

  for (let i = 0; i < formFields.length; i++) {
    const element = formFields[i];
    if (element.type !== 'submit') {
      credentials[element.name] = element.value;
    }
  }

  const allFieldsFilled = Object.values(credentials).every(value => value !== '');

  if (allFieldsFilled) {
    console.log(credentials);
    loginForm.reset();
  } else {
    alert('All fields must be filled!');
  }
});