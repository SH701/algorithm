function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length; i = i + n) {
    let start = i;
    let end = i + n;
    result.push(num_list.slice(start, end));
  }

  return result;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
