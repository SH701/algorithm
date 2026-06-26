function solution(number, limit, power) {
    const arr = []
    let result = 0
    for(let i=1;i<=number;i++){
        let a =1
        let count = 1
        while(i!==a){
            if(i%a===0){
                count++
            }
            a++
        }
        arr.push(count)
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>limit){
            arr[i]=power
        }
        result += arr[i]
    }
   return result
}