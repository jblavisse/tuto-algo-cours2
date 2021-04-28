/*
3.2 Ecrire un algorithme qui demande l’âge d’un enfant à l’utilisateur. 
Ensuite, il l’informe de sa catégorie de Footballer :
"Poussin" avant 7 ans
"Pupille" de 7 à 9 ans
"Minime" de 9 à 11 ans
"Cadet" après 11 ans
*/

let age = prompt("Entrez un âge");

if(age<7) {
    alert("Poussin");
}
else if(age<9) {
    alert("Pupille");
}
else if(age<11) {
    alert("Minime");
}
else {
    alert("Cadet");
}