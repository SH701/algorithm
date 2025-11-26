function solution(A, B) {
  let result = 0;
  while (true) {
    if (A === B) {
      return result;
    }
    A = A[A.length - 1] + A.slice(0, A.length - 1);
    result++;
    if (result > A.length) return -1;
  }
}
console.log(solution("hello", "llohe"));
