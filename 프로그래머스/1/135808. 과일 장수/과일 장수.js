function solution(k, m, score) {
  const box = Math.floor(score.length / m);
  let sum = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i < box; i++) {
    sum += score[(i + 1) * m - 1] * m;
  }
  return sum;
}