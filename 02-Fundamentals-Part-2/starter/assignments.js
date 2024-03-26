let country = "The Federal Republic of the United States of America";
const continent = "North America";
let populationInMillions = 331;

console.log(country);
console.log(continent);
console.log(populationInMillions);

const isIsland = false;
let language = "English";
// isIsland = true;

console.log(isIsland);
console.log(populationInMillions);
console.log(country);
console.log(language);

// console.log(populationInMillions / 2);
// populationInMillions++;
// console.log(populationInMillions);
// console.log(populationInMillions > 6);
// console.log(33 <= populationInMillions);
const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  populationInMillions +
  " million people speak " +
  language;
console.log(description1);

const description2 = `${country} is in ${continent} and its ${populationInMillions} million people speak ${language}`;
console.log(description2);

if (populationInMillions > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      33 - populationInMillions
    } million below average`
  );
}
