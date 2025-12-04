function solution(score) {
  const avg = score.map(([a, b]) => (a + b) / 2);

  const r = [];

  for (let i = 0; i < avg.length; i++) {
    let rank = 1;
    for (j in avg) {
      if (avg[j] > avg[i]) rank++;
    }
    r.push(rank);
  }

  return r;
}
console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
