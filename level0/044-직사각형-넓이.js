function solution(dots) {
  const x = dots.map((dot) => dot[0]);
  const y = dots.map((dot) => dot[1]);

  const w = Math.max(...x) - Math.min(...x);
  const h = Math.max(...y) - Math.min(...y);
  return w * h;
}

console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
