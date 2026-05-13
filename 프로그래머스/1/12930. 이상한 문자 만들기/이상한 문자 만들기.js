function solution(s) {
  const a = []
  let b = 0
  for(let i=0;i<s.length;i++){
      if(s[i]===' '){
          a.push(" ")
          b = 0
      }else{
          b%2===0? a.push(s[i].toUpperCase()) : a.push(s[i].toLowerCase())
           b++
      }
     
  }
    return a.join("")
}