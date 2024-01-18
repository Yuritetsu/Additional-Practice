
let tempFahrenheit = prompt(
    "enter a number, we will convert that number from fahrenheit to celcius"
  );


// let tempFahrenheit = 50;

function ConvertCelsius(tempFahrenheit) {
    return tempFahrenheit * 9/5 + 32
};
 
let tempCelsius = ConvertCelsius(tempFahrenheit)

console.log(`${tempFahrenheit} Fahrenheit is approximately ${tempCelsius} Celsius`);

function ConvertKelvin(tempCelsius) {
    return tempCelsius + 273.15
};

let tempKelvin = ConvertKelvin(tempCelsius)

console.log(`${tempCelsius} Celsius is approximately ${tempKelvin} Kelvins`);

let todaysForecast = `The current temperature outside is ${tempFahrenheit} degrees Fahrenheit, ${tempCelsius} degrees Celsius, and ${tempKelvin} degrees Kelvin.`

console.log(todaysForecast);

let roundedCelsius = Math.floor(tempCelsius);
let roundedFahrenheit = Math.floor(tempFahrenheit);
let roundedKelvin = Math.floor(tempKelvin);

console.log(`Today's temperature rounded down is ${roundedCelsius} degree Celsius, ${roundedFahrenheit} degree Fahrenheit, and ${roundedKelvin} degree Kelvins`);
