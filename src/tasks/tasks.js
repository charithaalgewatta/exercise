const { getRandomWord, getRandomWordAsync } = require("../service");

const task1 = getRandomWord({ fileName: "task1" });
const task2 = getRandomWord({ fileName: "task2", fizzbuzz: true });
const task3Step1 = getRandomWordAsync({ fileName: "task31" });
const task3Step2 = getRandomWordAsync({
  fileName: "task32",
  fizzbuzz: true,
});
const task4FizzBuzzSyncWithErrors = getRandomWord({
  fileName: "task4withErrors",
  fizzbuzz: true,
  withErrors: true,
});
const task4FizzBuzzWithErrors = getRandomWordAsync({
  fileName: "task42",
  fizzbuzz: true,
  withErrors: true,
});
const task4FizzBuzzWithErrorsSlow = getRandomWordAsync({
  fileName: "task41slow",
  fizzbuzz: true,
  withErrors: true,
  slow: true,
});

module.exports = {
  task1,
  task2,
  task3Step1,
  task3Step2,
  task4FizzBuzzWithErrors,
  task4FizzBuzzWithErrorsSlow,
};
