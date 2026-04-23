function solution(myString, pat) {
    const a = myString.lastIndexOf(pat)
    return myString.substring(0,a+pat.length)
}