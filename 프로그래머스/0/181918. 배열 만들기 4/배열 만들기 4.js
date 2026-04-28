function solution(arr) {
   const stk = []
   for(let i=0; i<arr.length;){
       const len = stk.length
       if(len===0){
           stk.push(arr[i])
           i++
       }else if(stk[len-1]<arr[i]){
           stk.push(arr[i])
            i++
       }else if(stk[len-1]>=arr[i]){
               stk.pop()
        }
   }
    return stk
}