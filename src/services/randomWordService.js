const { getTextAsync, getTextSync, fileWriter } = require("../util");
const { TASK_3_FILE, TASK_2_FILE } = require("../assets/constants");
const { performance } = require("perf_hooks");
const fizzBuzzHelper = require("../helpers/fizzBuzzHelper");

/**
 * @function Function for getting a random word synchronously.
 * @param  {Boolean} withErrors=false
 * @param  {String} fileName
 * @param  {Boolean} fizzbuzz=false
 */
const getRandomWord = ({
  withErrors = false,
  fizzbuzz = false,
  fileName,
} = {}) => {
  const start = performance.now();
  const wordArray = [];
  for (let i = 1; i <= 100; i++) {
    let randomWord = "";
    if (fizzbuzz) randomWord = fizzBuzzHelper(i);
    if (!randomWord) randomWord = getTextSync({ withErrors });

    wordArray.push(`${i}: ${randomWord}`);
  }
  fileWriter(wordArray, fileName);
  const end = performance.now();
  return end - start;
};

/**
 * @function Function for getting a random word asynchronously.
 * @param  {Boolean} withErrors=false
 * @param  {Boolean} slow=false
 * @param  {String} fileName
 * @param  {Boolean} fizzbuzz=false
 */
const getRandomWordAsync = async ({
  withErrors = false,
  slow = false,
  fileName,
  fizzbuzz = false,
} = {}) => {
  const start = performance.now();
  const promiseArray = [];
  for (let i = 1; i <= 100; i++) {
    promiseArray.push(
      new Promise(async (resolve) => {
        let randomWord = "";
        if (fizzbuzz) randomWord = fizzBuzzHelper(i);
        if (!randomWord) randomWord = await getTextAsync({ withErrors, slow });
        resolve(`${i}: ${randomWord}`);
      })
    );
  }
  const wordArray = await Promise.all(promiseArray);
  fileWriter(wordArray, fileName);
  const end = performance.now();
  return end - start;
};

module.exports = {
  getRandomWord,
  getRandomWordAsync,
};
