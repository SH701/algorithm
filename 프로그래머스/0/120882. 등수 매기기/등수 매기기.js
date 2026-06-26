function solution(score) {
    const arr = score.map((m)=>m[0]+m[1])
    const result =[]
   for(let i=0;i<arr.length;i++){
       let r = 1;
       for(let j=0; j<arr.length;j++){
           if(arr[j]>arr[i]){
               r++;
           }
       }
        result.push(r)
   }
    return result
}