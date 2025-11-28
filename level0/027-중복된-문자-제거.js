function solution(my_string) {
  const arr = my_string.split("");
  const arr2 = new Set(arr);
  const arr3 = [...arr2];
  const result = arr3.join("");

  return result;
}
console.log(solution("We are the world"));
