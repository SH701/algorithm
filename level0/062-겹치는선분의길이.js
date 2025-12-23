function solution(lines) {
  let diff = 0;
  const min = Math.min(...lines.map((line) => line[0]));
  const max = Math.max(...lines.map((line) => line[1]));
  for (let x = min; x < max; x++) {
    let count = 0;

    for (const [start, end] of lines) {
      if (x >= start && x < end) {
        count++;
      }
    }

    if (count >= 2) {
      diff++;
    }
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
