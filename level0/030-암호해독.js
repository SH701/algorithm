function solution(cipher, code) {
  let result = [];
  for (let i = code - 1; i < cipher.length; i = i + code) {
    result.push(cipher[i]);
  }
  return result.join("");
}
console.log(solution("dfjardstddetckdaccccdegk", 4));
