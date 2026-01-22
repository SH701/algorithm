function solution(s, n) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() === 32) {
      arr.push(s[i].charCodeAt());
    } else if (s[i] >="A"  && s[i] <= "Z") {
      arr.push(((s[i].charCodeAt() - 65 + n) % 26) + 65);
    } else if (s[i] >= "a" && s[i] <= "z") {
      arr.push(((s[i].charCodeAt() - 97 + n) % 26) + 97);
    }
  }
  return String.fromCharCode(...arr);
}