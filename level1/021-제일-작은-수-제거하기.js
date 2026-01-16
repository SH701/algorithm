function solution(arr) {
  if (arr.length <= 1) return [-1];
  const min = Math.min(...arr);
  return arr.filter((n) => n != min);
}
console.log(solution([4, 3, 2, 5]));
