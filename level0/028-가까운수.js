function solution(array, n) {
  array.sort((a, b) => {
    const diffA = Math.abs(a - n);
    const diffB = Math.abs(b - n);

    if (diffA === diffB) return a - b;
    return diffA - diffB;
  });

  return array[0];
}

console.log(solution([2, 14, 28], 26));
