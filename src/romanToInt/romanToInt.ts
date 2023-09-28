const charToInt = (s: string) => {
    switch(s) {
        case "I":
            return 1
        case "V": 
            return 5
        case "X":
            return 10
        case "L":
            return 50
        case "C": 
            return 100
        case "D":
            return 500
        default: 
            return 1000
    }
}

function romanToInt(s: string): number {
    let i = 0;
    for(let j = 0; j < s.length; j++){
        let curr = charToInt(s[j])
        if(j+1 < s.length && curr < charToInt(s[j+1])){
            i += (charToInt(s[j+1]) - curr); 
            j++;
        } else {
            i += curr;
        }
    }

    return i;
};