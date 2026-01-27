function solution(n, arr1, arr2) {
  const ar1 = [];
  const ar2 = [];
  const arr = [];

  for (let i = 0; i < arr1.length; i++) {
    ar1.push(arr1[i].toString(2).padStart(n, 0));
  }
  for (let i = 0; i < arr2.length; i++) {
    ar2.push(arr2[i].toString(2).padStart(n, 0));
  }
  for (let i = 0; i < ar1.length; i++) {
    let str = "";
    for (let j = 0; j < ar1[i].length; j++) {
      if (ar1[i][j] === "1" || ar2[i][j] === "1") {
        str += "#";
      } else {
        str += " ";
      }
    }
    arr.push(str);
  }
  return arr;
}