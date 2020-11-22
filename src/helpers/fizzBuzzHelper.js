module.exports = fizzBuzzHelper = (index) => {
  let randomWord = `${index % 3 == 0 ? "Fizz" : ""}${
    index % 5 == 0 ? "Buzz" : ""
  }`;
  return randomWord;
};
