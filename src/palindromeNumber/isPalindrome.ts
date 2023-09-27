function isPalindrome(x: number): boolean {
    const s = x.toString();
    let rs = "";

    for(let i = s.length -1; i >= 0; i --){
        rs += s[i];
    }

    return s === rs;
};