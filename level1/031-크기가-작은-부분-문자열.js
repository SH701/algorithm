function solution(t, p) {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (p.length + i <= t.length) {
      if (t.slice(i, p.length + i) <= p) {
        count++;
      }
    }
  }

  return count;
}
console.log(solution("500220839878", "7"));
