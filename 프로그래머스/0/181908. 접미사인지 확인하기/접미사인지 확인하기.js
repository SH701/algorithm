function solution(my_string, is_suffix) {
    const arr =[]
   for(let i=0;i<my_string.length; i++){
       arr.push(my_string.slice(i,my_string.length))
   }
    if(arr.includes(is_suffix)){
        return 1
    }else{
        return 0
    }
}