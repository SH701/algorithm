function solution(strArr) {
    const arr = []
   for(let i=0;i<strArr.length;i++){
       if(i%2===1){
           arr.push(strArr[i].toUpperCase())
       }else{
           arr.push(strArr[i].toLowerCase())
       }
   }
    return arr
}