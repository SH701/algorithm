function solution(polynomial) {
  const arr = polynomial.split(" + ");
  let sumX = 0;
  let sumCount = 0;
  let result = "";
  let x = "";
  let y = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      sumX += 1;
    } else if (arr[i].endsWith("x")) {
      sumX += Number(arr[i].replace("x", ""));
    } else {
      sumCount += Number(arr[i]);
    }
  }
  if (sumX > 0) {
    x = sumX === 1 ? "x" : `${sumX}x`;
  }
  if (sumCount > 0) {
    if (sumX === 0) {
      y = `${sumCount}`;
    } else {
      y = ` + ${sumCount}`;
    }
  }
  result = x + y;
  return result;
}

console.log(solution("3x + 7 + x"));
