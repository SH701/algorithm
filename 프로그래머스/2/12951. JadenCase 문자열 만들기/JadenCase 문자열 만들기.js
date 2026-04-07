function solution(s) {
   return s.split(" ").map(word=>word.charAt().toUpperCase()+word.slice(1).toLowerCase()
                          ).join(" ")
}