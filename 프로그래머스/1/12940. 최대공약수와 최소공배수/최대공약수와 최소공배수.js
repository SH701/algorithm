function solution(n, m) {
    let min = 0
    let max = 0 
    for(let i=1; i<=n;i++){
        if(n%i===0 && m%i===0){
            min = i
        }
    }
    max = n*m/min
    
    return [min,max]
}