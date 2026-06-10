export const capitalize = (str) => {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
};

export const reverseString = (str) => {
    return str.split('').reverse().join('');
};

export const calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    divide: (a, b) => {
        return a / b;
    },
    multiply: (a, b) => {
        return a * b;
    },
};

export const caesarCipher = (str, sf) => {
    // lowercase ascii letters
    // 97 through 122
    let lowercase = {
        lowerBound: 97,
        upperBound: 122,
    };

    let uppercase = {
        lowerBound: 65,
        upperBound: 90,
    };

    let newWord = [];
    for (let i = 0; i < str.length; i++) {
        let charNum = str.charCodeAt(i);

        let newCharNum;
        if (
            charNum >= lowercase.lowerBound &&
            charNum <= lowercase.upperBound - sf
        ) {
            newCharNum = charNum + sf;
        } else if (
            charNum >= uppercase.lowerBound &&
            charNum <= uppercase.upperBound - sf
        ) {
            newCharNum = charNum + sf;
        } else {
            newCharNum = charNum;
        }
        newWord.push(String.fromCharCode(newCharNum));
    }

    return newWord.join('');
};

export const analyzeArray = (arr) => {
    // get average
    // sum of all numbers, divided by length
    const average = arr.reduce((acc, val) => acc + val) / arr.length;
    const min = arr.reduce((acc, val) => (val < acc ? val : acc));
    const max = arr.reduce((acc, val) => (val > acc ? val : acc));
    const length = arr.length;

    return { average, min, max, length };
};

analyzeArray([2, 3, 4]);
