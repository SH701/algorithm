function solution(n) {
  const arr = [];
  const arr2 = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].toString(2));
  }
  let maxCount = 0;
  let b = 0;
  for (let i = 0; i < arr2.length; i++) {
    let count = 0;
    for (let j = 0; j < arr2[i].length; j++) {
      if (arr2[i][j] === "1") count++;
    }
    if(count >maxCount){
        maxCount = count
        b = arr[i]
    }
  }
  return b
}
console.log(solution(10));
console.log(solution(20));
console.log(solution(5));
