const lampadina = document.getElementById("turned_off_lamp");
const interruttoreLuce = document.getElementById("interruttore");

//todo usare w3school per trovare le proprietà e i metodi: link => https://www.w3schools.com/jsref/dom_obj_document.asp
console.log(lampadina);
/*
// Funzione che data un azione(CLICK) cambia l'immagine della lampadina spenta a quella accesa
interruttoreLuce.addEventListener("click", () => {
  lampadina.src = "./assets/img/yellow_lamp.png";

  // cambia il testo del bottone in accesa
  interruttoreLuce.innerText = "turned_on";
  console.log(lampadina);
});
console.log(lampadina);
*/

//! ESERCIZIO BONUS
//  Funzione ad uso singolo "SENZA NOME" che data un'azione verifica se l'immagine attualmente renderizzata è spenta/accesa attraverso .includes come condizione e se lo è la spegne altrimenti l'accende

interruttoreLuce.addEventListener("click", () => {
  // Controllo se il nome del file attuale contiene "white"
  if (lampadina.src.includes("white")) {
    lampadina.src = "./assets/img/yellow_lamp.png";
    interruttoreLuce.innerText = "Turn-off";
    console.log(lampadina);
  } else {
    lampadina.src = "./assets/img/white_lamp.png";
    interruttoreLuce.innerText = "Turn-on";
    console.log(lampadina);
  }
});
