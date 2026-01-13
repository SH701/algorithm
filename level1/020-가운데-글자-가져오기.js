function solution(s) {
  const length = s.length;
  if (length % 2 === 1) {
    return s[(length - 1) / 2 ];
  } else {
    return s[length / 2 - 1] + s[length / 2];
  }
}
console.log(solution("abcde"));
