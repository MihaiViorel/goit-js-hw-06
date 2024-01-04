//////////////////////////////////////////////////////////////////////////////
// Exercitiul 7:
//////////////////////////////////////////////////////////////////////////////

// Scrieți un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și modifică stilurile inline al span#text prin actualizarea proprietății font-size. Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.

//////////////////////////////////////////////////////////////////////////////

const slider = document.getElementById('font-size-control');
const spanAbracadabra = document.getElementById('text');

slider.addEventListener('input', function() {
  const fontSize = slider.value;
  spanAbracadabra.style.fontSize = `${fontSize}px`;
});