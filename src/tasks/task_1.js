const { getTextSync, fileWriter } = require("../util");
const { TASK_1_FILE } = require("../assets/constants");

/**
 *@function
 @param
 */
module.exports = task_1 = async () => {
  console.log("task 1");
  const wordArray = [];
  for (let i = 1; i <= 100; i++) {
    wordArray.push(`${i}: ${await getTextSync()}`);
  }
  fileWriter(wordArray, TASK_1_FILE);
};
