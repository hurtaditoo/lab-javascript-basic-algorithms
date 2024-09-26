// Iteration 1: Names and Input
const hacker1 = 'John';
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Michelangelo';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops
let nameInCapitalLetters = '';
for (let i = 0; i < hacker1.length; i++) {
    const char = hacker1[i];
    nameInCapitalLetters += `${char} `;
}

console.log(nameInCapitalLetters.trim());

let reverseName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    const char = hacker2[i];
    reverseName += `${char}`;
}

console.log(reverseName)