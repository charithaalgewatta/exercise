const { getRandomWord, getRandomWordAsync } = require("./services");
const {
  TASK,
  TIME_TAKEN,
  FILE_NAME,

  TASK_1_FILE,
  TASK_2_FILE,
  TASK_3_1_FILE,
  TASK_3_2_FILE,
  TASK_4_1_FILE,
  TASK_4_2_FILE,
  TASK_4_SLOW_FILE,

  GET_WORDS,
  GET_WORDS_WITH_FIZZ_BUZZ,
  GET_WORDS_ASYNC,
  GET_WORDS_ASYNC_FIZZ_BUZZ,
  GET_WORDS_FIZZ_BUZZ_ERR,
  GET_WORDS_ASYNC_FIZZ_BUZZ_ERR,
  GET_WORDS_ASYNC_FIZZ_BUZZ_ERR_SLOW,
} = require("./assets/constants");

(async () => {
  const task1 = getRandomWord({ fileName: TASK_1_FILE });
  const task2 = getRandomWord({ fileName: TASK_2_FILE, fizzbuzz: true });
  const task3Step1 = await getRandomWordAsync({ fileName: TASK_3_1_FILE });
  const task3Step2 = await getRandomWordAsync({
    fileName: TASK_3_2_FILE,
    fizzbuzz: true,
  });
  const task4FizzBuzzSyncWithErrors = getRandomWord({
    fileName: TASK_4_1_FILE,
    fizzbuzz: true,
    withErrors: true,
  });
  const task4FizzBuzzWithErrors = await getRandomWordAsync({
    fileName: TASK_4_2_FILE,
    fizzbuzz: true,
    withErrors: true,
  });
  const task4FizzBuzzWithErrorsSlow = await getRandomWordAsync({
    fileName: TASK_4_SLOW_FILE,
    fizzbuzz: true,
    withErrors: true,
    slow: true,
  });

  console.table([
    {
      [TASK]: GET_WORDS,
      [TIME_TAKEN]: task1.toFixed(3),
      [FILE_NAME]: TASK_1_FILE,
    },
    {
      [TASK]: GET_WORDS_WITH_FIZZ_BUZZ,
      [TIME_TAKEN]: task2.toFixed(3),
      [FILE_NAME]: TASK_2_FILE,
    },
    {
      [TASK]: GET_WORDS_ASYNC,
      [TIME_TAKEN]: task3Step1.toFixed(3),
      [FILE_NAME]: TASK_3_1_FILE,
    },
    {
      [TASK]: GET_WORDS_ASYNC_FIZZ_BUZZ,
      [TIME_TAKEN]: task3Step2.toFixed(3),
      [FILE_NAME]: TASK_3_2_FILE,
    },
    {
      [TASK]: GET_WORDS_FIZZ_BUZZ_ERR,
      [TIME_TAKEN]: task4FizzBuzzSyncWithErrors.toFixed(3),
      [FILE_NAME]: TASK_4_1_FILE,
    },
    {
      [TASK]: GET_WORDS_ASYNC_FIZZ_BUZZ_ERR,
      [TIME_TAKEN]: task4FizzBuzzWithErrors.toFixed(3),
      [FILE_NAME]: TASK_4_2_FILE,
    },
    {
      [TASK]: GET_WORDS_ASYNC_FIZZ_BUZZ_ERR_SLOW,
      [TIME_TAKEN]: task4FizzBuzzWithErrorsSlow.toFixed(3),
      [FILE_NAME]: TASK_4_SLOW_FILE,
    },
  ]);
})();
