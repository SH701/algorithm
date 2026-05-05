function solution(phone_number) {
    const arr= []
    for(let i=0;i<phone_number.length-4;i++){
        arr.push('*')
    }
    return arr.join("")+phone_number.substring(phone_number.length-4,phone_number.length)
}