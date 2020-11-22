const { getTextSync, fileWriter } = require("../util");
const { TASK_1_FILE } = require("../assets/constants");
const { performance } = require("perf_hooks");

/**
 *@function
 @param
 */
module.exports = task1 = () => {
  const start = performance.now();
  const wordArray = [];
  for (let i = 1; i <= 100; i++) {
    wordArray.push(`${i}: ${getTextSync()}`);
  }
  fileWriter(wordArray, TASK_1_FILE);
  const end = performance.now();
  return end - start;
};
