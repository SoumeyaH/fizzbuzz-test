export const projectName = () => {
  return "Kata starter project";
};

export const fizzBuzz = (num) => {
  if (num % 3 === 0) {
    return "fizz";
  }
  // multiple of 3 - fizz
  // multiple of 5 - buzz
  // multiple of both - fizzbuzz

  return num;
};
