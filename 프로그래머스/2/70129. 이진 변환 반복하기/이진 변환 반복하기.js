function solution(s) {
    let count =0
    let zero =0
   
    while(s!=='1'){
       zero += s.split('').filter(e => e === '0').length;
       const x = s.replace(/0/g, '');
       const c = x.length
       s = c.toString(2)
       count ++
   }
  return [count,zero]
}