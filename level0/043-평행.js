function solution(dots) {
  function slope(a, b) {
    return (b[1] - a[1]) / (b[0] - a[0]);
  }
  const pairs = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];

  for (let [a, b, c, d] of pairs) {
    if (slope(dots[a], dots[b]) === slope(dots[c], dots[d])) {
      return 1;
    }
  }

  return 0;
}



