function solution(my_string, s, e) {
    const arr = my_string.split("")
    const first = my_string.slice(0,s)
    const last = my_string.slice(e+1,my_string.length)
    const middle = my_string.slice(s,e+1)
    const middle2 = []
    for(let i=middle.length-1;i>=0; i--){
        middle2.push(middle[i])
    }
    
  
    return first+middle2.join("")+last
}