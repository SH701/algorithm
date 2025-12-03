function solution(sides) {
  const max = sides[0] + sides[1] - 1;
  const min = Math.max(...sides) - Math.min(...sides) + 1;

  return max - min + 1;
}
console.log(solution([11, 7]));
