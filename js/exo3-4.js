/* 
3.4 Les habitants de Pétaouchnok paient l’impôt selon les règles suivantes :

les hommes de plus de 20 ans paient l’impôt
les femmes paient l’impôt si elles ont entre 18 et 35 ans
les autres ne paient pas d’impôt
Le programme demandera donc l’âge et le sexe du Pétaouchnokois, 
et se prononcera donc ensuite sur le fait que l’habitant est imposable.

Pour le sexe, on demandera une lettre: "H" (pour homme)  / "F" pour femme

*/

let age, gender;

age = prompt("Entrez votre âge");
gender = prompt("Entrez votre sexe: H ou F");

// les hommes de plus de 20 ans paient l’impôt
if(gender=="H" && age>=20) {
    alert("Tu paies l'impôt");
}
// les femmes paient l’impôt si elles ont entre 18 et 35 ans
else if(gender=="F" && age>=18 && age<=35) {
    alert("Tu paies l'impôt");
}
// les autres ne paient pas d’impôt
else {
    alert("Tu paies pas d'impôt");
}