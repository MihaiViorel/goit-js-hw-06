//////////////////////////////////////////////////////////////////////////////
// Exercitiul 1:
//////////////////////////////////////////////////////////////////////////////

// Codul HTML conține o listă de categorii ul#categories.
// Scrieți un script care:

// Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
// Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului(tag - ul < h2 >) și numărul de elemente din acea categorie(toate elementele < li >).

//////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Consola: //////////////////////////////////
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
//////////////////////////////////////////////////////////////////////////////

const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Număr total de categorii: ${categoryItems.length}`);

categoryItems.forEach((categoryItem, index) => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const subItems = categoryItem.querySelectorAll('ul > li');
  console.log(`Categorie ${index + 1}: ${categoryTitle}`);
  console.log(`Număr de elemente: ${subItems.length}`);
  subItems.forEach((subItem, subIndex) => {
    console.log(`  Element ${subIndex + 1}: ${subItem.textContent}`);
  });
  console.log('\n');
});
