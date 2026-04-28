function solution(l, r) {
    const arr = []
   for (let i = l; i <= r; i++) {
        const str = String(i);
       if([...str].every((v)=> v==='0' || v==='5')){
           arr.push(i)
       }
   }
    return arr.length ===0 ? [-1] : arr
    
}