var firstUniqChar = function(s) {
    const characterCountMap = new Map();

    for (const char of s) {
        characterCountMap.set(char, (characterCountMap.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (characterCountMap.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};