function solution(numbers, direction) {
  if (direction === "right") {
    let last = numbers[numbers.length - 1];
    numbers.pop();
    numbers.unshift(last);
  } else {
    let first = numbers[0];
    numbers.shift();
    numbers.push(first);
  }
  return numbers;
}
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
