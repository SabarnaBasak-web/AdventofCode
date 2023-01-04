const fs = require('fs');
const alpha = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const solveItems = (data) => {
    let count = 0;
    data.split("\n").forEach(element => {
        const firstSection = element.substring(0, element.length / 2).split('');
        const secondSection = element.substring(element.length / 2).split('');

        for (let i = 0; i < alpha.length; i++) {
            if (firstSection.includes(alpha[i]) && secondSection.includes(alpha[i])) count += i;
        }
    });

    console.log("Count", count)
}

const solveGroup = (data) => {
    let count = 0;
    data = data.split('\n');
    for (let i = 0; i < data.length; i += 3) {
        const firstRow = data[i];
        const secondRow = data[i + 1];
        const thirdRow = data[i + 2];
        for (let i = 0; i < alpha.length; i++) {
            if (firstRow.includes(alpha[i]) && secondRow.includes(alpha[i]) && thirdRow.includes(alpha[i])) count += i;
        }
    }
    console.log("Count", count)
}
fs.readFile('./dataset.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log("Something went wrong!");
    } else {
        // solveItems(data);
        solveGroup(data);
    }

})