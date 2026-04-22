function solution(arr) {
    let sum = 1
    while(sum<arr.length){
        sum*=2
    }
    while(sum!==arr.length){
        arr.push(0)
    }
    return arr
}