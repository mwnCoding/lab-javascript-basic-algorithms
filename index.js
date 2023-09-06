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


//Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dignissim lectus, eget pharetra eros. Donec id ornare leo, non aliquam mi. Praesent accumsan ipsum urna, quis posuere ligula molestie vel. Vivamus sit amet neque ligula. Proin condimentum ac dolor a vestibulum. Nulla elit lacus, accumsan non diam ut, congue venenatis massa. Sed faucibus justo id nisl varius feugiat. Nulla ultrices, sapien lacinia dictum imperdiet, ipsum nisi venenatis urna, quis lobortis dolor quam vitae eros. Quisque quis sagittis dui. Fusce nec velit nec nibh gravida feugiat sollicitudin nec tortor. Nulla quis quam id orci mattis luctus. Suspendisse sed eros sit amet neque lobortis ornare. Quisque ut leo quis arcu interdum malesuada id accumsan leo.

Maecenas vel dolor feugiat, accumsan augue tincidunt, iaculis justo. Proin sit amet sapien ac velit venenatis ullamcorper. Nulla rutrum mauris tempor rhoncus tincidunt. Integer efficitur quis urna sit amet cursus. Sed in consectetur enim. Curabitur porttitor lorem at tortor tempus faucibus. Donec ac imperdiet velit. Nullam vel placerat mi. Morbi malesuada ante at tellus pellentesque, a varius arcu fringilla. Vivamus tincidunt nisi a vehicula condimentum. Nunc diam nibh, commodo vitae lobortis sed, sollicitudin quis metus. Nulla vel sagittis diam. Mauris pellentesque venenatis nisl non mattis. Vivamus vel sapien in dui pharetra placerat a ut sem. Aliquam ultricies tellus velit, at suscipit nulla efficitur eu. Donec et odio placerat, pellentesque lacus vel, tristique dui.

Aenean eget tellus felis. In et ipsum sed libero finibus imperdiet non vitae turpis. Duis mattis et lectus vitae laoreet. Quisque auctor nisi nunc, quis fermentum lacus dapibus in. Aliquam erat volutpat. Praesent vehicula tortor at lectus vulputate, ac feugiat lectus faucibus. Aenean bibendum neque sit amet vehicula volutpat. In blandit ultrices ullamcorper. Proin viverra id lectus sed blandit. Fusce non dui sed diam ultrices elementum. Cras sit amet tortor quis dui placerat egestas a in quam. Suspendisse suscipit mi arcu, nec sagittis tellus egestas et. Morbi ac dui ut nunc tempor congue a sed purus. Suspendisse pellentesque gravida lacus id semper. Morbi tincidunt suscipit justo eu vestibulum.`

function countWords(text) {
    //Sorry I didn't feel like making an array or string with all the non word characters and then make my check on that. I kept it as basic as possible
    const onlyLetterRegex = /[a-zA-Z]+/;
    let counter = 0;

    for (let i = 0; i < text.length - 1; i++) {
        if(onlyLetterRegex.test(text[i]) && !onlyLetterRegex.test(text[i+1])) {
            counter++;
            continue;
        }
    }
    return counter;
}

console.log(countWords(longText));


function countEt(text) {
    const onlyLetterRegex = /[a-zA-Z]+/;
    let counter = 0;
    const et = "et";

    //Skip last three elements to stay in bounds
    for (let i = 0; i < text.length - 3; i++) {
        //if the first and the last character are non letter characters and the second and third character are "et"
        if (!onlyLetterRegex.test(text[i]) && !onlyLetterRegex.test(text[i+3]) && text[i+1] + text[i+2] === et) {
            counter++;
        }
    }
    return counter;
}

console.log(countEt(longText));


