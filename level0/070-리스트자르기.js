function solution(n, slicer, num_list) {
  const result = [];
  const a = slicer[0];
  const b = slicer[1];
  const c = slicer[2];
  if (n === 1) {
    for (let i = 0; i <= b; i++) {
      result.push(num_list[i]);
    }
  } else if (n === 2) {
    for (let i = a; i < num_list.length; i++) {
      result.push(num_list[i]);
    }
  } else if (n === 3) {
    for (let i = a; i <= b; i++) {
      result.push(num_list[i]);
    }
  } else {
    for (let i = a; i <= b; i+=c) {
      result.push(num_list[i]);
    }
  }
  return result;
}
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
