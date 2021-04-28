/* 3.3 Ecrire un algorithme qui demande une heure, 
et affiche sa valeur une seconde plus tard
Entrez une heure: 21
Entrez une minute: 32
Entrez une seconde: 58
Dans une seconde, il sera 21:32:59
On doit traiter le cas du passage à une nouvelle minute,
du passage à une nouvelle heure, du passage à une nouvelle journée 


Indice -> Pour éviter des ennuis, 
remplacer prompt("Entrez un nombre") 
par Number(prompt("Entrez un nombre"))
*/

let hours, minutes, seconds;

hours = Number(prompt("Entrez une heure"));
minutes = Number(prompt("Entrez un nombre de minutes"));
seconds = Number(prompt("Entrez un nombre de secondes"));

seconds = seconds+1;

if(seconds>59) {
    minutes = minutes+1;
    seconds = 0;
}

if(minutes>59) {
    hours = hours+1;
    minutes = 0;
}

if(hours>23) {
    hours = 0;
}

console.log("Dans une seconde, il sera " + hours + ":" + minutes + ":" + seconds);