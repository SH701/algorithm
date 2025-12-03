function solution(my_string) {
  let num = "";
  let result = [];
  let a = 0;
  for (let i = 0; i < my_string.length; i++) {
    if ("0" <= my_string[i] && my_string[i] <= "9") {
      num += my_string[i];
    } else {
      if (num.length > 0) {
        result.push(num);
        num = "";
      }
    }
  }
  if (num.length > 0) result.push(num);

  for (let i = 0; i < result.length; i++) {
    a += Number(result[i]);
  }
  return a;
}
console.log(solution("1a2b3c4d123Z"));
