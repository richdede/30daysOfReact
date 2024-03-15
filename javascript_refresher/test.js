// ternary operator
let color = "green";
let isCorrect = false;

color = isCorrect ? "green" : "red";

//fetching data
const fetchData = async (animalName) => {
  const data = await fetch(`myapi.com/searchterm=${animalName}`);
  const name = data.person?.name;
};
