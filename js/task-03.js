//////////////////////////////////////////////////////////////////////////////
// Exercitiul 3:
//////////////////////////////////////////////////////////////////////////////

// Scrieți un script care creează o galerie de imagini pe baza unei matrice cu date.HTML - ul are o listă ul.gallery.
// Folosiți matricea de obiecte images, pentru a crea elementele <img> imbricate în <li>. Pentru a crea marcajul, vor fi de mare ajutor template strings și metoda insertAdjacentHTML().

// Toate elementele galeriei trebuie adăugate la DOM dintr-o singură operație.
// Adăugați un stil minim de poziționare a galeriei (flexbox sau grid) prin intermediul claselor CSS.
//////////////////////////////////////////////////////////////////////////////

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//////////////////////////////////////////////////////////////////////////////

const galleryList = document.querySelector('.gallery');
let galleryHTML = '';

images.forEach((image) => {
  galleryHTML += `
    <li>
      <img src="${image.url}" alt="${image.alt}" width="500" height="350">
    </li>
  `;
});

galleryList.insertAdjacentHTML('beforeend', galleryHTML);

// listStyle = none
galleryList.style.listStyle = 'none';
const galleryItems = document.querySelectorAll('.gallery li');
galleryItems.forEach((item) => {
  item.style.listStyle = 'none';
});