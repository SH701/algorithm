function getCount(num) {
    let count = 0;
    while (num > 0) {
        if (num & 1) count++;
        num >>= 1;
    }

    return count;
}

function solution(n) {
    const target = getCount(n);

    for (let i = n + 1; ; i++) {
        if (getCount(i) === target) {
            return i;
        }
    }
}