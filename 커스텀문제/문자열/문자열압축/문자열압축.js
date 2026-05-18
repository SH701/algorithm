function solution(s) {
  let result = "";
  let count = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      result += String(s[i - 1] + (count > 1 ? count : ""));
      count = 1;
    }
  }
  return result;
}
console.log(solution("aaabbc"));
