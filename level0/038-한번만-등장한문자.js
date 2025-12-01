function solution(s) {
  const arr = s.split("");
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) result.push(arr[i]);
  }
  return result.sort().join("");
}
console.log(solution("abcabcadc"));
