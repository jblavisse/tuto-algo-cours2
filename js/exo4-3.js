/* 
4.3 Ecrire un algorithme qui affiche 
les nombres de 18 à 27
*/

let nb=18;

while(nb<=27) {
    console.log(nb);
    nb=nb+1;
}

// ---- Le même en "Pour"

let nb;
// nb++ -> nb=nb+1
// nb=nb-1 -> Ca enlève de 1 en 1
// nb=nb+2 -> Ca additionne de 2 en 2
for(nb=18; nb<=27;nb++) {
    console.log(nb);
}

// nb=18      18<=27 OUI  console.log(nb)    nb++ -> nb=18+1=19
// nb=19      19<=27 OUI  console.log(nb)    nb++ -> nb=19+1=20
