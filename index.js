// Iteration 1: Names and Input
const hacker1 = "Max";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Krystian";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

switch (hacker1Length && hacker2Length) {
    case  hacker1Length > hacker2Length:
        console.log(`The driver hast the longest name, it has ${hacker1Length} characters.`);
        break;
    case hacker1Length < hacker2Length:
        console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
        break;
    default:
        console.log(`Wow, you both have equally long names, ${hacker1Length}`);
}

// Iteration 3: Loops
let upperReversed = "";

for (let i = hacker1Length - 1; i >= 0; i--) {
    upperReversed += hacker1[i];
    if (i > 0) {
        upperReversed += " ";
    }
}

upperReversed = upperReversed.toUpperCase();
console.log(upperReversed);


let reversed = "";
for (let i = hacker2Length - 1; i >= 0; i--) {
    reversed += hacker2[i];
}
console.log(reversed);


let shortestNameLength;

if (hacker1Length <= hacker2Length) {
    shortestNameLength = hacker1Length;
} else {
    shortestNameLength = hacker2Length;
}

for (let i = 0; i < shortestNameLength; i++) {
    console.log(hacker1[i]);
    console.log(hacker2[i]);
    console.log(hacker1[i] === hacker2[i]);
    if (hacker1[i] < hacker2[i]) {
        console.log(`The driver's name goes first.`);
        break;
    } 
    else if (hacker1[i] > hacker2[i]) {
        console.log(`Yo, the navigator goes first, definetly.`);
        break;
    }
    else if (hacker1[i] === hacker2[i]) {
        //If the last character of the strings match and the two names have the same length
        if (i === (shortestNameLength - 1) && hacker1Length === hacker2Length) {
            console.log("What?! You both have the same name?");
        }
        //If the last character of the strings match and the two names don't have the same length
        else if (i === (shortestNameLength - 1) && hacker1Length !== hacker2Length) {
            console.log("How is that possible? You ALMOST have the same name!");
        }
        else {
            continue;
        }
    }  
}
