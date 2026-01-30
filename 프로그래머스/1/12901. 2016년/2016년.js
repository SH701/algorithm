function solution(a, b) {
    const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let totalDay = 0;

    
    for (let i = 1; i < a; i++) {
        if (i === 2) totalDay += 29;
        else if (i === 4 || i === 6 || i === 9 || i === 11) totalDay += 30;
        else totalDay += 31;
    }    
    totalDay += b - 1;
    return days[(5 + totalDay) % 7];
}
