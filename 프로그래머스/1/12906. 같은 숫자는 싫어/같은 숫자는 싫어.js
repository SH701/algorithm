function solution(arr) {
  const ar = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) ar.push(arr[i]);
  }
  return ar;
}

