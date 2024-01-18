let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let age = parseInt(prompt("ENter your age:"));
let homeTown = prompt("ENter your hometown:");



// let firstName = "Rona";
// let lastName = "Samson";
// let age = 35;
// let homeTown = "Angeles City";


console.log(`Hello! My name is ${firstName} ${lastName} ! I'm ${age} years old, and I'm from ${homeTown} . It's nice to meet you!`);

let firstInitial = firstName.charAt(0);
let lastInitial = lastName.charAt(0);

console.log(`My initials are ${firstInitial}.${lastInitial}.`);

let nameLength = firstName.length;

console.log(nameLength);