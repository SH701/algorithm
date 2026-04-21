function solution(num_list) {
    const a = num_list.length
    let result =1
    if(a>=11){
        for(let i=0;i<a;i++){
            result +=num_list[i]
        }
         return result-1
    }else{
        for(let i=0;i<a;i++){
            result *=num_list[i]
        }
         return result
    }
   
}