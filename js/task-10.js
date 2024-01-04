//////////////////////////////////////////////////////////////////////////////
// Exercitiul 10: (nu este obligatoriu)
//////////////////////////////////////////////////////////////////////////////
// Scrieți un script pentru crearea și ștergerea unei colecții de elemente.Utilizatorul introduce numărul de elemente în input și dă click pe butonul Create, după care colecția este afișată în pagină.Când se dă click pe butonul Destroy, colecția de elemente va fi ștearsă.

// Creați o funcție createBoxes(amount), care ia ca parametru un număr. Funcția va crea atâtea <div>-uri câte sunt specificate în amount și le va adăuga la div#boxes.

// Dimensiunile primului <div> vor fi 30px pe 30px.
// Fiecare element, cu excepția primului, ar trebui să fie cu 10px mai lat și mai înalt decât cel anterior.
// Toate elementele trebuie să aibă o culoare de fundal aleatoare în format HEX.Folosiți funcția getRandomHexColor deja existentă pentru a obține o culoare.

// Scrieți o funcție destroyBoxes() care va șterge conținutul div#boxes, ștergând astfel toate elementele create.

//////////////////////////////////////////////////////////////////////////////

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//////////////////////////////////////////////////////////////////////////////

const inputField = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputField.value;
  destroyBoxes();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10; 
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}