function solution(phone_number) {
  const a = phone_number.length - 4;
  const b = "*".repeat(a);
  const last = phone_number.slice(-4);
  return b + last;
}
console.log(solution("01033334444"));
