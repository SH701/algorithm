function solution(a, b) {
  const aa = BigInt(a);
  const bb = BigInt(b);
  const result = aa + bb;
  return result.toString();
}
console.log(solution("18446744073709551615", "287346502836570928366"));


//Number는 10¹⁶ 이상 정수를 정확히 표현 못 해서 BingInt사용