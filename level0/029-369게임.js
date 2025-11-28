function solution(order) {
  const arr = String(order).split("");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "3" || arr[i] === "6" || arr[i] === "9") result++;
  }
  return result;
}
console.log(solution(29423));
