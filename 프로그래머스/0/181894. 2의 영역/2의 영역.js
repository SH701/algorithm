function solution(arr) {
   const a = arr.indexOf(2)
   const b = arr.lastIndexOf(2)
   return a===-1 ? [-1] :arr.slice(a,b+1)
}