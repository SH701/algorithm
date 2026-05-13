function solution(k, score) {
   const a = []
   const result = []
   for(let i=0;i<score.length;i++){  
     a.push(score[i])
     a.sort((a,b)=>a-b)
       if(a.length >k){
           a.shift()
       }
     result.push(a[0])
   }
    return result 
}