export default function lengthOfLongestSubstring(s: string): number {
    if(s.length <= 1) return s.length;
    let longestLength = 1;
    const chars = s.split("");

    for(let i = 0; i < chars.length; i ++) {
        const set = new Set();
        set.add(chars[i])
        for(let j = i + 1; j < chars.length; j++){
            if (set.has(chars[j])) break
         else {
            set.add(chars[j])
            if (set.size > longestLength) longestLength = set.size
         }
        }
    }


    return longestLength
};