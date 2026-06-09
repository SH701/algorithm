function solution(answers) {
    const result = []
    const a = [1,2,3,4,5]
    const b = [2,1,2,3,2,4,2,5]
    const c = [3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5]
    let countA = 0
    let countB = 0
    let countC = 0
    for(let i=0;i<answers.length;i++){
        if(answers[i] === a[i % a.length]) countA++;
        if(answers[i] === b[i % b.length]) countB++;
        if(answers[i] === c[i % c.length]) countC++;
    }
    const max = Math.max(countA,countB,countC)
    if(countA === max) result.push(1)
    if(countB === max) result.push(2)
    if(countC === max) result.push(3)
    return result
}