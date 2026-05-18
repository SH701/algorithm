function solution(k, tangerine) {
   const obj = {}
   let count = 0
   for(let i=0;i<tangerine.length;i++){
       obj[tangerine[i]] = (obj[tangerine[i]]||0) +1 
   }
   const values = Object.values(obj).sort((a,b)=>b-a)
  for(let value of values){
      k -= value
      count ++
      if(k<=0){
          break
      }
  }
    return count
}