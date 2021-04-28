/*
4.1 Ecrire un algorithme qui demande à l’utilisateur un nombre compris 
entre 1 et 3 jusqu’à ce que la réponse convienne.
*/

let resp = prompt("Entre un nombre entre 1 et 3");

while(resp<1 || resp>3) {
    resp = prompt("Un nombre entre 1 et 3. Merde.");
}

console.log(resp);