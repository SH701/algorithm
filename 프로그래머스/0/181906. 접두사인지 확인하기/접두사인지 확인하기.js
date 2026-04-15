function solution(my_string, is_prefix) {
   const arr =[]
   for(let i=my_string.length; i>0;i--){
       arr.push(my_string.slice(0,i))
   }

   if(arr.includes(is_prefix)){
       return 1
   }else{
       return 0
   }
}