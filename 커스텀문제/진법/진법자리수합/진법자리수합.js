function solution(n,k){
    return n.toString(k).split("").reduce((acc,cur)=>acc+parseInt(cur,k),0)
}
console.log(solution(45,3))
console.log(solution(255,16))
console.log(solution(100,2))