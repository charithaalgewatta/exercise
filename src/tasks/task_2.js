const { getTextSync, fileWriter } = require("../util");
const { TASK_2_FILE } = require("../assets/constants");
const { performance } = require("perf_hooks");
const fizzBuzzHelper = require("../helpers/fizzBuzzHelper");

/**
 */
module.exports = task2 = () => {
  const start = performance.now();
  const wordArray = [];
  for (let i = 1; i <= 100; i++) {
    let randomWord = fizzBuzzHelper(i);
    if (!randomWord) randomWord = getTextSync();

    wordArray.push(`${i}: ${randomWord}`);
  }
  fileWriter(wordArray, TASK_2_FILE);
  const end = performance.now();
  return end - start;
};
