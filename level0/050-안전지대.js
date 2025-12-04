function solution(board) {
  const n = board.length;
  let danger = Array.from({ length: n }, () => Array(n).fill(false));

  const dx = [-1, -1, -1, 0, 0, 1, 1, 1, 0];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1, 0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        for (let k = 0; k < dx.length; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];

          if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
            danger[nx][ny] = true;
          }
        }
      }
    }
  }

  let safeCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!danger[i][j] && board[i][j] === 0) {
        safeCount++;
      }
    }
  }

  return safeCount;
}
