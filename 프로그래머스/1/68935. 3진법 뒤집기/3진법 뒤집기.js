function solution(n) {
   const a =  (n.toString(3).split("").reverse().join(""))
   return parseInt(a,3)
}