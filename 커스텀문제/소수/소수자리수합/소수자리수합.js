function solution(n) {
  const arr = new Array(n + 1).fill(true);
  const a = [];
  let sum = 0;
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = i * i; j <= n; j += i) {
      arr[j] = false;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      a.push(i);
    }
  }
  for (let i = 0; i < a.length; i++) {
    const b = String(a[i]);
    for (let j = 0; j < b.length; j++) {
      sum += Number(b[j]);
    }
  }
  return sum;
}
console.log(solution(20));
