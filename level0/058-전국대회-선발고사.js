function solution(rank, attendance) {
  const arr = [];
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === true) {
      arr.push([rank[i], i]);
    }
  }
  arr.sort((a, b) => a[0] - b[0]);
  return 10000 * arr[0][1] + 100 * arr[1][1] + arr[2][1];
}
console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
