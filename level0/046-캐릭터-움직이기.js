function solution(keyinput, board) {
  let start = [0, 0];

  const maxX = Math.floor(board[0] / 2);

  const maxY = Math.floor(board[1] / 2);

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "left") {
      start[0] -= 1;
    }
    if (keyinput[i] === "right") {
      start[0] += 1;
    }
    if (keyinput[i] === "down") {
      start[1] -= 1;
    }
    if (keyinput[i] === "up") {
      start[1] += 1;
    }
    start[0] = Math.min(maxX, Math.max(start[0], -maxX));
    start[1] = Math.min(maxY, Math.max(start[1], -maxY));
  }

  return start;
}

console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
