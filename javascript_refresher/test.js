// Adding javasript to web
<p>inline script</p>
<p>Internal scriptt</p>
<p>External script</p>

// arrays
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)


// ternary operator
let color = "green";
let isCorrect = false;

color = isCorrect ? "green" : "red";

//fetching data
const fetchData = async (animalName) => {
  const data = await fetch(`myapi.com/searchterm=${animalName}`);
  const name = data.person?.name;
};


// Destructuring arrays

const numbers = [1, 2, 3]
const countries = ['Finland', 'Sweden', 'Norway']

for (const number of numbers) {
  console.log(number)
}

for (const country of countries) {
  console.log(country)
}

// map

function callback(item, i) {
  return // code goes here
}

const modifiedArray = array.map(callback)

// or syntax in an arrow function

const callback = (item, i) => {
  return // code goes here
}
const modifiedArray = array.map(callback)