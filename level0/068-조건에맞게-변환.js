function solution(arr) {
  let current = arr;
  let count = 0;

  while (true) {
    const next = current.map(v => {
      if (v >= 50 && v % 2 === 0) return v / 2;
      if (v < 50 && v % 2 === 1) return v * 2 + 1;
      return v;
    });

    let same = true;
    for (let i = 0; i < current.length; i++) {
      if (current[i] !== next[i]) {
        same = false;
        break;
      }
    }

    if (same) break;

    current = next;
    count++;
  }

  return count;
}
