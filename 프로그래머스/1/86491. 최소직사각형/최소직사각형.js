function solution(sizes) {
  const a = sizes.map((arr) => arr.sort((a, b) => a - b));
  a.sort((a, b) => a[0] - b[0]);

  const w = [];
  const h = [];
  for (let i = 0; i < a.length; i++) {
    w.push(a[i][0]);
    h.push(a[i][1]);
  }
  const MaxW = Math.max.apply(null, w);
  const MaxH = Math.max.apply(null, h);
  return MaxH * MaxW;
}