function solution(my_str, n) {
  let result = [];
  for (let i = 0; i <= my_str.length - 1; i = i + n) {
    result.push(my_str.slice(i, n + i));
  }

  return result;
}
console.log(solution("abc1Addfggg4556b", 6));
