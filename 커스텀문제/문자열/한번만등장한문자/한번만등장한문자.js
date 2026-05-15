function solution(s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }
  let count = 0;
  const key = Object.keys(obj).sort();
  for (let key in obj) {
    if (obj[key]===1) {
      count++
    }
  }
  return count;
}
console.log(solution("banana"));
