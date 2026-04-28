function solution(my_strings, parts) {
    let result =''
    for(let p=0;p<parts.length;p++){
        const [s,e] = parts[p]
        const a = my_strings[p].slice(s,e+1)
        result += a
    }
    return result
}