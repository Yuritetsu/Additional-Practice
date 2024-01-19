// determine if a jacket is needed depending on the temperature outside

let currentTemp = prompt ("Please enter the temperature outside in Fahrenheit to find out if a jacket is needed:");
let isRainingInput =  prompt ("Is it raining? Write true or false:");

// converting string to boolean
let isRaining = isRainingInput.toLowerCase() === "true"


if (currentTemp <= 40) {
    console.log(`It's ${currentTemp} degrees outside! Wear a heavy jacket.`);
}
else if (currentTemp <= 60) {
    console.log(`It's ${currentTemp} degrees outside, wear a jacket.`);
}
else if (currentTemp < 70) {
    console.log(`It's ${currentTemp} degrees outside, wear a light jacket.`)
}
else {
    console.log(`It's hot today! No jacket needed!`);
}

// adding else if for raining

if (isRaining) {
    console.log(`It's raining too, so you should bring an umbrella!`)
}    
else {
    console.log(`No rain today, you can leave the umbrella at home!`);
}