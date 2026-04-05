const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');


const arr = input[0].split(' ').map(Number);

console.log(arr[0]+arr[1])