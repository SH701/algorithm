function solution(s){
    const obj = {}
    for(let i=0;i<s.length;i++){
        obj[s[i]] = (obj[s[i]] || 0) + 1
    }
    let max = 0
    let result =''
    const key = Object.keys(obj).sort()
    for(let key in obj){
        if(obj[key]>max){
            max = obj[key]
            result = key
        }
    }
    return result
}
console.log(solution("banana"))