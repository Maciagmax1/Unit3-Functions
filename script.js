const length = 5;
const width = 3;
const area = length * width;
console.log(area);

const length2 = 3;
const width2 = 4;
const area2 = length2 * width2;
console.log(area2);

// function declaration
function getAreaFD(length, width) {
  return length * width;
}

// function expression
const getAreaFE = function (length, width) {
  return length * width;
};

console.log(getAreaFE(5, 5));

// arrow function (preferred)

const getAreaAF = (length, width) => length * width;
console.log(getAreaAF(2, 2));

function add(n1, n2) {
  return n1 + n2;
}

console.log(add(4, 4));

const randomDamage = () => Math.floor(Math.random() * 10) + 1;

console.log(randomDamage());

function characterCount(word) {
  return word.length;
}

console.log(characterCount("Mitchell"));

const canVote = function (age) {
  return age < 18 ? false : true;
};

console.log(canVote(18));

const vowelCount = (word) => {
  word = word.toLowerCase();
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      counter++;
    }
  }
  return counter;
};

console.log(vowelCount("Mitch"));

const vowelCountV2 = (word1, word2) => {
  if (vowelCount(word1) > vowelCount(word2)) {
    return word1;
  } else if (vowelCount(word1) < vowelCount(word2)) {
    return word2;
  } else {
    return "same";
  }
};

const toCelcius = (fahrenheit) => {
  return (fahrenheit - 32) * (5 / 9);
};

console.log(toCelcius(32));

const toFahrenheit = (celcius) => {
  return celcius * (9 / 5) + 32;
};

console.log(toFahrenheit(0));

const tempConverter = (temp, unitToConvertTo) => {
  if (unitToConvertTo === "f") {
    return toFahrenheit(temp);
  } else if (unitToConvertTo === "c") {
    return toCelcius(temp);
  } else {
    return "please provide either f or c as unit to convert to";
  }
};

console.log(tempConverter(0, "f"));

const predictTheFuture = (question) => {
  const responses = ["yes", "no", "maybe", "ask again"];
  const randomNumber = Math.floor(Math.random() * 4);
  return `${question}: ${responses[randomNumber]}`;
};

console.log(predictTheFuture("Will Martin eat pizza tonight?"));
