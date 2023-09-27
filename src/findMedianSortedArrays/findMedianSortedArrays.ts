export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const comboArr = [...nums1, ...nums2];
    comboArr.sort((a, b) => a > b ? 1 : -1);
    const indexMiddle = comboArr.length/2;

    if(comboArr.length % 2 === 0){
        return (comboArr[indexMiddle - 1]+ comboArr[indexMiddle])/2;
    }
    return comboArr[Math.floor(indexMiddle)]
};