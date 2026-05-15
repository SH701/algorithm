function solution(s1, s2) {
  if (s1.split("").sort().join("") === s2.split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(solution("listen", "silent"));
