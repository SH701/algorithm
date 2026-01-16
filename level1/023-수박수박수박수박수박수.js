function solution(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += i % 2 === 1 ? "박" : "수";
  }
  return result;
}

console.log(solution(3));
