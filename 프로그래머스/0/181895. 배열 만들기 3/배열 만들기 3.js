function solution(arr, intervals) {
    let result =[]
    for(let i=0; i<intervals.length; i++){
        const [start,end] = intervals[i]
        result.push(...arr.slice(start,end+1))
    }
    return result
}