import lengthOfLongestSubstring from "./lengthOfLongestSubstring"

describe("lengthOfLongestSubstring", () => {
    it("test 1", () => {
        expect(lengthOfLongestSubstring("au")).toBe(2);
    })
    it("test 2", () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    })
    it("test 1", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    })
    it("test 1", () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    })
})