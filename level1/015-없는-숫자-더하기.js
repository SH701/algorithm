function solution(numbers) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < numbers.length; i++) {
    if (arr.includes(numbers[i])) {
      arr = arr.filter((n) => n !== numbers[i]);
    }
  }
  return arr.reduce((a, b) => a + b, 0);
}
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
