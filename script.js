const lampadina = document.getElementById("turned_off_lamp");
const interruttoreLuce = document.getElementById("interruttore");

//todo usare w3school per trovare le proprietà e i metodi: link => https://www.w3schools.com/jsref/dom_obj_document.asp
console.log(lampadina);

//^   // Funzione che data un azione(CLICK) cambia l'immagine della lampadina spenta a quella accesa
//^   interruttoreLuce.addEventListener("click", () => {
//^     lampadina.src = "./assets/img/yellow_lamp.png";
//^
//^     // cambia il testo del bottone in accesa
//^     interruttoreLuce.innerText = "turned_on";
//^     console.log(lampadina);
//^   });
//^   console.log(interruttoreLuce);

//note  Arthur Exercise: partendo dall'esercizio bonus fai in modo che dal quinto clic la lampadina si rompa

let countOfClick = 0;
/**
 * Funzione che aumenta il contatore di click. Fino a quando il contatore non raggiunge 5 l'interruttore continuerà a spegnere accendere la lampadina. Altrimenti grazie a return uscire dalla funzione dopo aver renderizzata la rottura della lampadina
 */
interruttoreLuce.addEventListener("click", () => {
  countOfClick += 1;
  // verificare se si è raggiunto il numero di click
  if (countOfClick >= 5) {
    lampadina.src = "./assets/img/exploded_lamp.jpg";
    interruttoreLuce.innerText = "La lampadina si è rotta";
    //fixed Se si arriva ai 5 click si può uscire dalla funzione
    return;
    // se no si continua normalmente il controllo accesa o spenta
  } else {
    if (lampadina.src.includes("white")) {
      lampadina.src = "./assets/img/yellow_lamp.png";
      interruttoreLuce.innerText = "Turn-off";
      console.log(lampadina);
    } else {
      lampadina.src = "./assets/img/white_lamp.png";
      interruttoreLuce.innerText = "Turn-on";
      console.log(lampadina);
    }
  }
});
/*
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
*/
