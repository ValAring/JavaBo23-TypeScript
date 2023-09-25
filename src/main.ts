import './style.css'

//Schritt 1: Deklariert eine Variable vom Typ 'number' mit dem Namen 'age' und weist ihr einen Wert zu.
let age : number = 34;
//Schritt 2: Schreibt eine 'for'-Schleife, die die Zahlen von 1 bis 'age' ausgibt.
function countToMyAge(val: number){
    for (let i = 0; i <= val; i++){
        console.log(i);
    }
}

console.log(countToMyAge(age));

//Schritt 3: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'age' größer als 18 ist. Gebt entsprechende Meldungen aus, je nachdem ob die Bedingung erfüllt ist oder nicht.
function minorCheck(val: number) : string{
    return val >= 18 ? "Is over 18" : "Is still a minor";
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>`
    + minorCheck(age)
    + `
  </div>
`
//Schritt 4: Deklariert eine Variable 'score' vom Typ 'number' und weist ihr den Wert 0 zu.
let score:number = 0;
//Schritt 5: Nutzt eine 'if'-Anweisung, um zu überprüfen, ob 'score' einen Wert hat. Gebt 'Score ist verfügbar.' aus, wenn 'score' einen Wert ungleich 0 hat.
if(score !== 0){
    console.log("Has a score");
}else{
    console.log("No score available");
}

//Schritt 6: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'score' als 'truthy' Wert ausgewertet wird. Gebt 'Score wird als truthy ausgewertet.' aus, wenn 'score' als 'truthy' gilt.
if (score) {
    console.log("Score is truthy");
} else {
    console.log("Score is falsy");
}

//Schritt 7: Deklariert eine Variable 'username' vom Typ 'string' und weist ihr den Wert '' (leerer String) zu.
let username:string = "";
//Schritt 8: Nutzt eine 'if'-Anweisung, um zu überprüfen, ob 'username' einen Wert hat. Gebt 'Username ist verfügbar.' aus, wenn 'username' einen Wert hat.
if(username){
    console.log("Username is available");
}else{
    console.log("Username is NOT available");
}

//Schritt 9: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'username' als 'falsy' Wert ausgewertet wird. Gebt 'Username wird als falsy ausgewertet.' aus, wenn 'username' als 'falsy' gilt.
if(!username){
    console.log("Username is falsy");
}
//Schritt 10: Deklariert eine Variable 'isAdmin' vom Typ 'boolean' und weist ihr den Wert 'false' zu.
let isAdmin : boolean = false;
//Schritt 11: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'isAdmin' als 'truthy' Wert ausgewertet wird. Gebt 'isAdmin wird als truthy ausgewertet.' aus, wenn 'isAdmin' als 'truthy' gilt.
if(isAdmin){
    console.log("isAdmin is truthy");
}
//Schritt 12: Nutzt eine 'if'-Anweisung, um zu überprüfen, ob 'isAdmin' 'false' ist. Gebt 'isAdmin ist false.' aus, wenn 'isAdmin' den Wert 'false' hat.
if(!isAdmin){
    console.log("isAdmin is false");
}

let n:number = 5;

function buildTree(val:number):void{
    let stars : string = "";
    let spaces : string = "";
    for (let i = 1; i <= val; i++) {
        stars = "";
        spaces = "";
        //leerzeichen
        for (let n = 0; n <= val-i; n++){
            spaces += ' ';
        }
        //sternchen
        for (let n = 0; n <= i*2-2; n++){
            stars += "*";
        }
        console.log(spaces + stars);
    }
        stars = "";
        spaces = "";
        for (let n = 0; n <= val-1; n++){
            spaces += ' ';
        }
        stars += "*";
    for (let i = 0; i < val; i++) {
        console.log(spaces + stars);
    }
}

console.log("tree: ");
buildTree(n);