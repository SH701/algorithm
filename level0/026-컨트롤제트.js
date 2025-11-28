function solution(s) {
  const arr = s.split(" ");
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(Number(arr[i]));
    if (arr[i] === "Z") {
      stack.pop();
      stack.pop();
    }
  }
  return stack.reduce((a, b) => a + b, 0);
}
console.log(solution("1 2 Z 3"));
