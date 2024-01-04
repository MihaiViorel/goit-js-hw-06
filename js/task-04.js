//////////////////////////////////////////////////////////////////////////////
// Exercitiul 4:
//////////////////////////////////////////////////////////////////////////////
// Contorul este format dintr - un tag span și două butoane care, atunci când sunt apăsate, ar trebui să - și mărească sau scadă valoarea cu unu.

// Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
// Adăugați click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
// Actualizați interfața cu noua valoare a variabilei counterValue.
//////////////////////////////////////////////////////////////////////////////

const subtractButton = document.querySelector('[data-action="decrement"]');
const addButton = document.querySelector('[data-action="increment"]');
const initialCounterValue = document.getElementById('value');

let newCounterValue = 0;

subtractButton.addEventListener('click', function() {
  newCounterValue -= 1;
  initialCounterValue.textContent = newCounterValue;
});

addButton.addEventListener('click', function() {
  newCounterValue += 1;
  initialCounterValue.textContent = newCounterValue;
});