export default function twoSum(nums: number[], target: number): number[] | undefined {
    for(let a = 0; a < nums.length; a++) {
        for(let b = 0; b < nums.length; b ++) {
            if(nums[a] + nums[b] === target && a !== b){
                return [a, b];
            }
        }
    }
};
