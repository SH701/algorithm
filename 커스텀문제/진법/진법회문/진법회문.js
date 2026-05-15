function solution(n,k){
    const a = n.toString(k)
    if(a===a.split("").reverse().join("")){
        return true
    }else{
        return false
    }

}
console.log(solution(121,10))