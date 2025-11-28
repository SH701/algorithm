function solution(my_string) {
  const arr = my_string.split("");
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      array.push(arr[i].toLowerCase());
    } else {
      array.push(arr[i].toUpperCase());
    }
  }
  return array.join("");
}

console.log(solution("cccCCC"));
