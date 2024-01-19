let userName = "";
if (userName) {
    console.log(`Hello ${userName}!`);
}
else {
    console.log(`Hello, guest!`);
}


let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt ("Choose a math operation you would like to do (add, subtract, multiply, divide, modulus):");

if (operation === "add") {
    result = num1 + num2;
    console.log(`Sum of ${num1} and ${num2} is ${result}.`);
} else if (operation === "subtract") {
    result = num1 - num2;
    console.log(`Difference of ${num1} and ${num2} is ${result}.`);
} else if (operation === "multiply") {
    result = num1 * num2;
    console.log(`Product of ${num1} and ${num2} is ${result}.`);
} else if (operation === "divide") {
    result = num1 / num2;
    console.log(`Division of ${num1} and ${num2} is ${result}.`);
} else if (operation === "modulus") {
    result = num1 % num2;
    console.log(`Modulus of ${num1} and ${num2} is ${result}.`);
} else {
    console.log(`${operation} is an invalid operation.`);
}

