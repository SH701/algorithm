function solution(name, yearning, photo) {
    const obj = name.reduce((acc,cur,i)=>{
        acc[cur] = yearning[i]
        return acc
    },{})
   return photo.map((p)=>p.reduce((sum,person)=> sum+ (obj[person]||0),0))
}