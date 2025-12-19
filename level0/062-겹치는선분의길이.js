function solution(lines) {
  let diff = 0;
  if (lines[0][(0, 1)] - lines[1][(1, 0)] > 0) {
    diff = lines[0][(0, 1)] - lines[1][(1, 0)];
  }
  return diff;
}
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
);
