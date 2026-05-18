function solution(arr) {
    let result = arr[0]
    for(let i=0;i<arr.length; i++){
        let gcd = 1
        for(let j=1;j<=Math.min(result,arr[i]);j++){
            if(result %j===0 && arr[i]%j===0){
               gcd = j    
            }
        }
        result = (result*arr[i])/gcd
    }
    return result
}