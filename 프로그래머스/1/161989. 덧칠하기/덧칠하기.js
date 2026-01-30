function solution(n, m, section) {
    let count =0
    let i = 0
    while(i<section.length){
        const start = section[i]
        const end = start + m-1
        count ++
       while (i < section.length && section[i] <= end) {
            i++;
       }
    }
    return count
}