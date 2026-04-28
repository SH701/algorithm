function solution(arr) {
    const stk = []
    
    for(let i=0;i<arr.length;i++){
        const len = stk.length;
        if(len === 0){
            stk.push(arr[i])
        }else if(stk[len-1]===arr[i]){
            stk.pop()
        }else if(stk[len-1]!==arr[i]){
            stk.push(arr[i])
        }
    }
    return stk.length ===0 ? [-1] : stk
}