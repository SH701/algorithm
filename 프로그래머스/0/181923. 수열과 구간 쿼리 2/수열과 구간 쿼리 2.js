function solution(arr, queries) {
    const result = []

   for(let q=0;q<queries.length;q++){
       const [s,e,k] = queries[q]
       let min =Infinity
       for(let i=s;i<=e;i++){
           if(arr[i]>k && arr[i]<min){
                min = arr[i]
           }
       }
       min !== Infinity ? result.push(min) : result.push(-1)
       
   }
    return result
}