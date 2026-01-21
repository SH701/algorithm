function solution(n) {
  let add = 0;
  while (n > 0) {
    add += n % 10;
    n = Math.floor(n / 10);
  }

  return add;
}

