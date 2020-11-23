const fs = require("fs");
const { getRandomWordSync, getRandomWord } = require("word-maker");

console.log("It works!");

// YOUR CODE HERE

let output = "";

function syncImplemenation() {
  output += "-- Synchronous Implementation -- \n";
  for (let i = 1; i <= 100; i++) {
    let word = "";

    try {
      if (i % 15 == 0) word = "FizzBuzz";
      else if (i % 3 == 0) word = "Fizz";
      else if (i % 5 == 0) word = "Buzz";
      else word = getRandomWordSync({ withErrors: true });
    } catch (e) {
      word = "It shouldn't break anything!";
    }
    output += `${i}: ${word} \n`;
  }
  outputToFile(output);
}

async function asyncImplementation() {
  output += "\n\n-- Asynchronous Implementation -- \n";
  for (let i = 1; i <= 100; i++) {
    let word = "";

    try {
      if (i % 15 == 0) word = "FizzBuzz";
      else if (i % 3 == 0) word = "Fizz";
      else if (i % 5 == 0) word = "Buzz";
      else word = await getRandomWordSync({ slow: true, withErrors: true });
    } catch (e) {
      word = "It shouldn't break anything!";
    }
    output += `${i}: ${word} \n`;
  }
  outputToFile(output);
}

syncImplemenation();
asyncImplementation();

function outputToFile(data) {
  const file_name = "./output.txt";
  fs.writeFile(file_name, data, function (err) {
    if (err) {
      console.log(`There was an error writing to file ${err}`);
    }
  });
}
