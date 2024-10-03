let listek = 12;
let navstevnici = 174;
let predstavenia = 15;

let prijem = listek * navstevnici * predstavenia;

let navstevniciMesacne = navstevnici * 15;

let listekstudent = 0.65 * listek;

let navstevniciStudenti = navstevniciMesacne * 0.4;

let prijemStudenti = navstevniciStudenti * listekstudent;

let beznyNavstevnici = navstevniciMesacne * 0.6;

let prijemBezny = beznyNavstevnici * 12;


document.body.innerHTML += "Mesačný príjem bez zľavy je: " + prijem + "EUR ";

document.body.innerHTML += "Mesačný príjem so zľavou je: " + (prijemBezny + prijemStudenti) + "EUR";




