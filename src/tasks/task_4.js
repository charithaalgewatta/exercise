const { getTextAsync, getTextSync, fileWriter } = require("../util");
const { TASK_4_FILE, TASK_3_FILE } = require("../assets/constants");
const fizzBuzzHelper = require("../helpers/fizzBuzzHelper");
const { performance } = require("perf_hooks");

fizzBuzzAsyncWithErrors = async () => {
  console.time("time took");
  console.log("fizzBuzzAsyncWithErrors");
  const promiseArray = [];
  for (let i = 1; i <= 100; i++) {
    let randomWord = fizzBuzzHelper(i);
    if (!randomWord)
      randomWord = await getTextAsync({ withErrors: true }, { slow: true });

    promiseArray.push(`${i}: ${randomWord}`);
  }
  const wordArray = await Promise.all(promiseArray);
  fileWriter(wordArray, TASK_4_FILE);
  console.timeEnd("time took");
};

fizzBuzzSyncWithErrors = () => {
  console.log("fizzBuzzSyncWithErrors");
  const wordArray = [];
  for (let i = 1; i <= 100; i++) {
    let randomWord = fizzBuzzHelper(i);
    if (!randomWord)
      randomWord = getTextSync({ withErrors: true }, { slow: true });

    wordArray.push(`${i}: ${randomWord}`);
  }
  fileWriter(wordArray, TASK_3_FILE);
};

module.exports = task4 = () => {
  fizzBuzzAsyncWithErrors();
  //   fizzBuzzSyncWithErrors();
};
