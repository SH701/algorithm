function solution(arr) {
   const arr1 =[]
   for(let i=0;i<arr.length;i++){
       if(arr[i]>=50 && arr[i]%2===0){
           arr1.push(arr[i]/2)
       }else if(arr[i]<50 && arr[i]%2===1){
           arr1.push(arr[i]*2)
       }else{
           arr1.push(arr[i])
       }
   }
   return arr1
}