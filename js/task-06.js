//////////////////////////////////////////////////////////////////////////////
// Exercitiul 6:
//////////////////////////////////////////////////////////////////////////////

// Scrieți un script care, atunci când focalizarea este pierdută de pe un input(evenimentul blur), verifică dacă numărul de caractere introduse este corect.
// Numărul de caractere admis trebuie specificat în atributul data-length.
// Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.
// Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat deja la fișierele sursă ale acestui exercițiu.

//////////////////////////////////////////////////////////////////////////////


const inputField = document.getElementById('validation-input');

inputField.addEventListener('blur', function() {
  const input = inputField.value;
  const lengthCondition = parseInt(inputField.getAttribute('data-length'), 10);
  console.log(lengthCondition)
    if (input.length === lengthCondition) {
    inputField.classList.remove('invalid');
    inputField.classList.add('valid');
  } else {
    inputField.classList.remove('valid');
    inputField.classList.add('invalid');
  }
});

