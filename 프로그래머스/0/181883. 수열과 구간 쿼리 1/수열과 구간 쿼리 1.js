function solution(arr, queries) {
    for(let i=0;i<arr.length;i++){
         const a = arr[i]
        for(let j=0;j<queries.length;j++){
            if(i>=queries[j][0] && i<=queries[j][1]){
                arr[i]+=1
            }
        }
    }
    return arr
}