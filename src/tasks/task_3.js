const { getTextAsync, fileWriter } = require("../util");
const { TASK_3_FILE, TASK_2_FILE } = require("../assets/constants");
const { performance } = require("perf_hooks");
const fizzBuzzHelper = require("../helpers/fizzBuzzHelper");

task1Async = async () => {
  const start = performance.now();
  const promiseArray = [];
  for (let i = 1; i <= 100; i++) {
    promiseArray.push(
      new Promise(async (resolve) => {
        resolve(`${i}: ${await getTextAsync()}`);
      })
    );
  }
  const wordArray = await Promise.all(promiseArray);
  fileWriter(wordArray, TASK_3_FILE);
  const end = performance.now();
  return end - start;
};

task2Async = async () => {
  const start = performance.now();
  const promiseArray = [];
  for (let i = 1; i <= 100; i++) {
    promiseArray.push(
      new Promise(async (resolve) => {
        let randomWord = fizzBuzzHelper(i);
        if (!randomWord) randomWord = await getTextAsync();
        resolve(`${i}: ${randomWord}`);
      })
    );
  }
  const wordArray = await Promise.all(promiseArray);
  fileWriter(wordArray, TASK_2_FILE);
  const end = performance.now();
  return end - start;
};

module.exports = task3 = () => {
  task1Async();
  task2Async();
  //   fizzBuzzSyncWithErrors();
};
