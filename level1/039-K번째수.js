function solution(array, commands) {
  const result = [];
  for (let i = 0; i < commands.length; i++) {
    const [start, end, k] = commands[i];
    const sliced = array.slice(start - 1, end);
    sliced.sort((a, b) => a - b);
    result.push(sliced[k - 1]);
  }
  return result;
}
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
);
