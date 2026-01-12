function solution(n) {
  const arr = String(n).split("");
  arr.sort().reverse();
  
  return Number(arr.join(""));
}
console.log(solution(118372));
