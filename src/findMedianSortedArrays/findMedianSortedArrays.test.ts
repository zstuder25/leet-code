import findMedianSortedArrays from "./findMedianSortedArrays";

describe("findMedianSortedArrays", () => {
    it("test 1", () => {
        expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.5);
    })
    it("test 2", () => {
        expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1);
    })
})