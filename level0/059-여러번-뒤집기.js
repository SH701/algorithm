function solution(my_string, queries) {
  const arr = my_string.split("");

  for (let i = 0; i < queries.length; i++) {
    const start = queries[i][0];
    const end = queries[i][1];

    const reserved = arr.slice(start, end + 1).reverse();

    for (let j = start; j <= end; j++) {
      arr[j] = reserved[j - start];
    }
  }

  return arr.join("");
}


