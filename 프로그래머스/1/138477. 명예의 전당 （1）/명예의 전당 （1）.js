function solution(k, score) {
    let hall =[];
    let result =[];
    for(let i=0;i<score.length;i++){
        hall.push(score[i])
        hall.sort((a,b)=>a-b)
        if(hall.length>k) hall.shift();
        result.push(hall[0])
    }
    return result
}
