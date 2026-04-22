function solution(a, d, included) {
    let result = 0
    for(let i=0;i<included.length;i++){
        if(i>0){
            a+=d
        }
        if(included[i]===true){
            
            result+=a
        }
    }
    return result
}