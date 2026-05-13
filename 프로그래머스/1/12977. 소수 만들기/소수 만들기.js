function solution(nums) {
    let count = 0;
    const arr = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                arr.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }

    const max = Math.max(...arr);

    const b = new Array(max + 1).fill(true);

    b[0] = false;
    b[1] = false;

    for (let i = 2; i <= Math.sqrt(max); i++) {
        if (b[i]) {
            for (let j = i * i; j <= max; j += i) {
                b[j] = false;
            }
        }
    }
    for(let i=0; i<arr.length;i++){
        if(b[arr[i]]){
            count ++;
        }
    }
  

    return count;
}