function solution(myString) {
    const arr = []
    for(let i=0;i<myString.length;i++){
        if(myString[i]==='a' || myString[i]==='A'){
            arr.push(myString[i].toUpperCase())
        }else{
            arr.push(myString[i].toLowerCase())
            
        }
    }
    return arr.join("")
}