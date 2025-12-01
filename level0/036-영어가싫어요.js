function solution(numbers) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  words.forEach((word, idx) => {
    numbers = numbers.replaceAll(word, idx);
  });

  return Number(numbers);
}
console.log(solution("onetwo"))