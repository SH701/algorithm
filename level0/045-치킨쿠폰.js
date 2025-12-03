function solution(chicken) {
  let coupon = chicken;
  let total = 0;

  while (coupon >= 10) {
    let service = Math.floor(coupon / 10);
    total += service;
    coupon = service + (coupon % 10);
  }
}
console.log(solution(1081));
