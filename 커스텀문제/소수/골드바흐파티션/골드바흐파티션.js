function solution(n) {
  const arr = new Array(n + 1).fill(true);
  let count = 0
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = i * i; j <= n; j += i) {
      arr[j] = false;
    }
  }
  for(let i=2; i<=n/2;i++){
    if(arr[i] && arr[n-i]){
        count ++;
    }
  }
  return count
}
console.log(solution(10));
