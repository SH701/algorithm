function solution(x, n) {
  const answer = [];
  if (x === 0) {
    return new Array(n).fill(0);
  }
  if (x > 0) {
    for (let i = x; i <= x * n; i += x) {
      answer.push(i);
    }
    return answer;
  } else {
    for (let i = x; i >= x * n; i += x) {
      answer.push(i);
    }
    return answer;
  }
}
console.log(solution(-200, 999));
