/*
Ecrire un algorithme qui demande un nombre à l’utilisateur, et l’informe 
ensuite si ce nombre est positif ou négatif
*/

let nb = prompt("Entrez un nombre");

// Version 1 en Si Sinon
if(nb>=0) {
    alert("Nombre positif");
}
else {
    alert("Nombre négatif");
}

// Version 2 en Si..Sinon Si..Sinon (on prend en compte 0)
if(nb>0) {
    alert("Nombre positif");
}
else if(nb<0) {
    alert("Nombre négatif")
}
else {
    alert("Ce nombre vaut 0");
}