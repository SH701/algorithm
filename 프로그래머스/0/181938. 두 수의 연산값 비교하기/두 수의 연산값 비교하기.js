function solution(a, b) {
    const x = Number(String(a)+String(b))
    const y = 2*a*b
    if(x>y){
        return x
    }else{
        return y
    }
}