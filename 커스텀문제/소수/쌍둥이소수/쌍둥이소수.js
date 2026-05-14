function solution(n){
    const arr = new Array(n+1).fill(true)
    const a = []
    let count =0
    arr[0] = false
    arr[1] = false
    for(let i=2;i<=Math.sqrt(n);i++){
        for(let j=i*i;j<=n;j+=i){
            arr[j] = false
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            a.push(i)
        }
    }
    for(let i=a.length-1;i>0;i--){
        if(a[i]-a[i-1]===2){
            count++
        }
    }
    return count
    
}
console.log(solution(20))