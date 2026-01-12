const lampadinaSpenta = document.getElementById("turned_off_lamp");
const interruttoreLuce = document.getElementById("interruttore");

//todo usare w3school per trovare le proprietà e i metodi: link => https://www.w3schools.com/jsref/dom_obj_document.asp

// Funzione che data un azione(CLICK) cambia l'immagine della lampadina spenta a quella accesa
interruttoreLuce.addEventListener("click", () => {
  lampadinaSpenta.src = "./assets/img/yellow_lamp.png";
});
