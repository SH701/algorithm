function solution(my_string, overwrite_string, s) {
  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
  );
}
console.log(solution("He11oWor1d", "lloWorl", 2));

//문자열 중간값 교체는 slice로 자르고 교체할 값을 +로 이어붙이기