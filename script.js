let cenaListek = 12;
let pocetNavstevniku = 174;
let pocetPredstaveni = 15;

let prijem = cenaListek * pocetNavstevniku * pocetPredstaveni
document.body.innerHTML += "Mesacny prijem je " + prijem + " EUR";

let cenaListekStudent = 0.65 * 12;

document.body.innerHTML += "Studentsky listek stoji " + cenaListekStudent + " EUR";

let pocetNavstevnikuStudentu = 0.4 * 174;

document.body.innerHTML += "Pocet navstevniku z rad studentu je " + pocetNavstevnikuStudentu;

let prijemStudenti = cenaListekStudent * pocetNavstevnikuStudentu; 

document.body.innerHTML += "Prijem za studenty je " + prijemStudenti;


