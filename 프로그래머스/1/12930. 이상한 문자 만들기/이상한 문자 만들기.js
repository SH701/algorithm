function solution(s) {
  const arr = [];
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      arr.push(" ");
      idx = 0;
    } else {
      arr.push(idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase());
      idx++;
    }
  }
  return arr.join("");
}

