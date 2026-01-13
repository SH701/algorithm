function solution(arr, divisor) {
  arr = arr.filter((n) => n % divisor === 0);
  arr.sort((a, b) => a - b);
  if (arr.length === 0) {
    return [-1];
  } else {
    return arr;
  }
}
console.log(solution([2, 36, 1, 3], 1));
