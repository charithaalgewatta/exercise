const { task1, task2, task3, task4 } = require("./tasks");

console.log("It works!");
(() => {
  task1();
  task2();
  const timeTaken = task3();
  console.log(timeTaken);
  task4();
})();
// YOUR CODE HERE
