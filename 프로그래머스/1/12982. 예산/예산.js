function solution(d, budget) {
  d.sort((a, b) => a - b);
  let sum = 0;
  let count = 0;
  for (let i of d) {
    if (sum + i > budget) break;
    sum += i;
    count++;
  }
  return count;
}