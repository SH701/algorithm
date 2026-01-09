function solution(num_list, n) {
  const a = num_list.slice(0, n);
  const b = num_list.slice(n, num_list.length);

  return [...b, ...a];
}
console.log(solution([5, 2, 1, 7, 5], 3));
