"use strict"

// Fiche mémo JavaScript

// 1. Les Variables
// Déclarer des variables - JS est sensible à la casse
let a = 5;

// Déclarations multiples
let b = 1, c = 2, d; // d a pour valeur undefined

// camelCase
let tauxDeTVA = 0.20;
tauxDeTVA = `20%`; // String

// Littéraux numériques
let e = -123.456;
e = 12e3; // 12 000
e = 0x7B; // 11 (B=11 de la base 16 (9+A+B=11) + 7*16 = 123 (voir calculatrice Windows)

// Littéraux chaîne
let f = `Je ne suis "pas" Toto`;
console.log(`La TVA est de ${tauxDeTVA}`);

// Les constantes
const PI = 3.14;
PI = 3.1415; // Puisque const = Error

// 2. Les Types
console.log(typeof 2);          // number
console.log(typeof `Toto`);     // string
console.log(typeof true);       // boolean
console.log(typeof false);      // boolean
let g;
console.log(typeof g);          // type ET valeur undefined

// 3. Opérateurs d'affectation
a = 17 % 5; // opérateur de Modulo = 2 parce que 17 = 5*3 + 2
a = 2 ** 3; // opérateur exposant = 8

// Concaténation
let h = `bon` + `jour`; // bonjour

// Opérateurs combinés
i = 1;
i += 2; // i = i + 2; donc i = 3

// Incrémentation / Décrémentation
i++; // vaut i += 1; donc i = i + 1;
i--; // vaut i -= 1; donc i = i - 1;

// Post / Pré-incrémentation / décrémentation
let j = 1;
let k = l++; // l = 2, k = 1 car évalué avant
let m = ++l; // l = 3, m = 3 car évalué après

// 4. Opérateurs de comparaison
// Opérateurs simples
console.log(3 == 3); // true car égalité simple
console.log(3 != 3); // false car non-égalité simple
console.log(3 <= 3); // true car égalité simple

// Opérateurs trictes
console.log(3 == `3`);  // true car priorité à la chaîne de caractère
console.log(3 === `3`); // false car pas d'égalité stricte des types

// Opérateurs logiques
console.log(2 < 3 && 3 > 4); // (false) && veut dire "ET"
console.log(2 < 3 || 3 > 4); // (true) || veut dire "OU"

// 5. Les Conversions
// Conversions implicites
let n = `3`, p = 5;
console.log(n + p);         // `35` concaténation car priorité à la chaîne de caractères
console.log(n + true);      // `3true` concaténation car priorité à la chaîne de caractères
console.log(p + true);      // 6 car true est converti en nombre 1
console.log(p + false);     // 5 car false est converti en nombre 0
console.log(1 / 0);         // Infinity
console.log(-1 / 0);        // -Infinity
console.log(1 / false);     // Infinity
console.log(0 / 0);         // NaN Not a Number
console.log(false / false); // NaN Not a Number

// Conversions explicites
n = parseInt(n);            // conversion de la string `n` en number 
console.log(typeof n);
n = parseFloat(n);            // conversion de la string `n` en number à virgule

// 6. Structure if/else 
let q = 5;

if (q == 2) {
    console.log(`q vaut 2`);
}
else if (q == 3) {
    console.log(`q vaut 3`);
}
else {
    console.log(`q "ne" vaut ni 2 ni 3`);
}

// 7. Structure switch/case
let r = 5;
switch (r) {
    case 2:
        console.log(`r vaut 2`);
        break;
    case 3:
        console.log(`r vaut 3`);
        break;
    default:
        console.log(`r ne vaut ni 2 ni 3`);
}

// 8. Opérateur ternaire
let s = 3;
console.log(s == 2 ? `s vaut 2` : `s ne vaut "pas" 2`); // ? = si et : = sinon
let variable = s == 2 ? `s vaut 2` : `s ne vaut "pas" 2`;
console.log(variable);

// 9. Evaluation booléen
/* Les valeurs évaluées à FALSE sont :
false, undefined, NaN, null, 0, " " */
if (false || undefined || NaN || null || 0 || "") {
    console.log(`Tu es certain ???`);
}

// Short-circuit operators
let t = 3;
console.log(t > 5 && t < 10);
console.log(t > 5 || t < 10);
let u;
console.log(u || 0); // Affichera 0 car u est undifined

// 10. Structure while
let v = 0;              // Initialisation
while (v < 10) {        // Condition
    console.log(v);     // Traitement à répéter
    v++;                // Action
}

// 11. Structure do / while
let w = 100;            // Initialisation
do {
    console.log(w);     // A exécuter AU MOINS une fois
    w++;
} while (w < 10);

// 12. Structure for
for (let x = 0; x < 10; x++) {
    console.log(x);
}

// 12. Rupture Break / Continue
// Rupture break
for (let x = 0; x < 10; x++) {
    if (x == 5) {
        break;  // Sortie de boucle
    }
    console.log(x);
}

// Rupture Continuebreak
for (let x = 0; x < 10; x++) {
    if (x % 2 === 0) {          // modulo vaut les chiffres paires
        continue;               // Tour suivant
    }
    console.log(x);
}

// 13. Les tableaux
let tab = [`Bob`, `Max`, `Tom`, 123]; // Tableaux définis par crochets
console.log(tab[0]);    // Bob
console.log(tab[3]);    // 123
tab[2] = 12;
console.log(tab);       // ["Bob", "Max", 12, 123]
tab[5] = 15;
console.log(tab);       // ["Bob", "Max", 12, 123, ..., 15]

// Parcours avec for
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}

// Parcours avec for / of
for (let e of tab) {
    console.log(e);
}

// 14. Les tableaux multi-dimensions
let tab2D = [[10, 20, 30], [1, 2]];
console.log(tab2D[0][2]); // 30 
console.log(tab2D[1][1]); // 2

// Parcours d'un tableau à 2 dimensions
for (const e of tab2D) {
    for (const e2 of e) {
        console.log(e2);
    }    
}

// 15. Destructuring assignment
let aa, ab, ac;
[aa, ab] = [1, 2];
[aa, ab, ac] = [3, 4];
[aa, ab, ac = 0] = [3, 4];
[aa, , ac] = [7, 8, 9];
[aa, ab] = [ab, aa];

// 16. Les fonctions
function bravo(prenom, points) {
    console.log(`Bravo ${prenom}, vous avez gagné ${points} points !`);
}

bravo(`MAT`, 40);
bravo(`SXM`, 100);

// Autre exemple avec return
function bravo(prenom, points) {
    console.log(`Bravo ${prenom}, vous avez gagné ${points} points !`);
    return Math.round(Math.random() * 100);            // random est un nombre aléatoire entre 0 inclus et 1 exclus
}                                                      // round est l'arrondi

let bonus = bravo(`MAT`, 50);
console.log(`Vous avez un bonus de ${bonus} points`);

// 17. Hosting et Scope
// Hoisting
// Scope
function f() {
    let n1 = 0;          // 0 est encapsulé dans le bloc {}
    console.log(n1);
}
let n1 = 3;
f();
console.log(n1);
