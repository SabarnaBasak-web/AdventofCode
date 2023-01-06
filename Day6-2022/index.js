const fs = require('fs');

const getUniqueIndex = (data) => {
    // Part 1 has range of 4
    // Part 2 has range of 14
    let charRange = 14
    let pos = 0;
    data.split("\n").forEach(element => {
        for (let i = 0; i < element.length - charRange; i++) {
            const substr = element.substring(i, i + charRange).split("");
            const substrSet = new Set();
            for (let j = 0; j < substr.length; j++) {
                substrSet.add(substr[j]);
            }
            if (substrSet.size === charRange) {
                pos = i + charRange;
                break;
            }
        }
    });
    return pos;
}

fs.readFile('./data.txt', 'utf-8', (error, data) => {
    if (error) console.log("Somethign went wrong");
    else console.log('data', getUniqueIndex(data));
})