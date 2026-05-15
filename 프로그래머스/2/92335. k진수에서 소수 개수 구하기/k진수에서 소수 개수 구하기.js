function solution(n, k) {
   const a = n.toString(k).split("0")
   const arr = []
   for(let i=0;i<a.length;i++){
       if(a[i]!=='1'){
           arr.push(a[i])
        }
   }
   const b = arr.filter((f)=>f!=="")
   let count = 0
   for(let i=0;i<b.length;i++){
       const num = Number(b[i])
       let isPrime = true
       for(let j=2;j<=Math.sqrt(num);j++){
           if(num%j===0){
               isPrime = false
               break;
           }
           
       }
       if(isPrime){
               count ++
           }
   }
    return count
}