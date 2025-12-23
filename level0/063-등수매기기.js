function solution(score) {
  const result = [];
  for (let i = 0; i < score.length; i++) {
    let avg = 0;
    avg = (score[i][0] + score[i][1]) / 2;
    result.push(avg);
  }
  return result.map((rank) => result.filter((r) => r > rank).length + 1);
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
