function solution(arr, flag) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (flag[i] === true) {
      for (let j = 1; j <= arr[i] * 2; j++) {
        result.push(arr[i]);
      }
    } else {
      for (let j = 0; j < arr[i]; j++) {
        result.pop();
      }
    }
  }
  return result;
}
console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
