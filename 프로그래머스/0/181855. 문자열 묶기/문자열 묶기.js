function solution(strArr) {
  const map = new Map();

  for (const str of strArr) {
    const len = str.length;
    map.set(len, (map.get(len) || 0) + 1);
  }

  return Math.max(...map.values());
}