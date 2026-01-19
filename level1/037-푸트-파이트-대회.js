function solution(food) {
  const left = [];

  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);

    for (let j = 0; j < count; j++) {
      left.push(i);
    }
  }

  return [...left, [0], ...left.reverse()].join("");
}
console.log(solution([1, 3, 4, 6]));
