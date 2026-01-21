function solution(x) {
  let y = 0;
  const z = x;
  while (x > 0) {
    y += x % 10;
    x = Math.floor(x / 10);
  }
  if (z % y === 0) {
    return true;
  } else {
    return false;
  }
}