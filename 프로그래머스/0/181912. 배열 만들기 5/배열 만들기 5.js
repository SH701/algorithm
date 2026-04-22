function solution(intStrs, k, s, l) {
    const arr =[]
    for(let i=0;i<intStrs.length;i++){
        const a = intStrs[i].slice(s,s+l)
        if(Number(a)>k){
            arr.push(Number(intStrs[i].slice(s,s+l)))
        }
    }
    return arr
}
