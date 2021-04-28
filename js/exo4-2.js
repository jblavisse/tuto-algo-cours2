/*
4.2 Ecrire un algorithme qui demande un nombre compris entre 10 et 20,
 jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, 
 on fera apparaître un message : « Plus petit ! »,
 et inversement, « Plus grand ! » si le nombre est inférieur à 10
*/


let nb = prompt("Entre un nombre entre 10 et 20");

while(nb<10 || nb>20) {
    
    if(nb<10) {
        nb = prompt("Plus grand STP!");
    }
    else {
        nb = prompt("Plus petit STP!");
    }
}

console.log(nb);