const fs = require('fs')

const crate = [
    ['H', 'C', 'R'],
    ['B', 'J', 'H', 'L', 'S', 'F'],
    ['R', 'M', 'D', 'H', 'J', 'T', 'Q'],
    ['S', 'G', 'R', 'H', 'Z', 'B', 'J'],
    ['R', 'P', 'F', 'Z', 'T', 'D', 'C', 'B'],
    ['T', 'H', 'C', 'G'],
    ['S', 'N', 'V', 'Z', 'B', 'P', 'W', 'L'],
    ['R', 'J', 'Q', 'G', 'C'],
    ['L', 'D', 'T', 'R', 'H', 'P', 'F', 'S']
]

// const crate = [
//     ['z', 'n'],
//     ['m', 'c', 'd'],
//     ['p']
// ]
const peekData = (data) => {
    data.split("\n").forEach(element => {
        let numOfItems = parseInt(element.split("from")[0].split(" ")[1]);
        const fromIndex = parseInt(element.split("from")[1].split("to")[0].trim()) - 1;
        const toIndex = parseInt(element.split("from")[1].split("to")[1].trim()) - 1;
        let i = crate[fromIndex].length - 1;
        let r = []
        while (numOfItems > 0) {
            r.push(crate[fromIndex][i]);
            crate[fromIndex].pop();
            numOfItems -= 1;
            i -= 1;
        }
        r.reverse(); // only for second part 
        crate[toIndex].push(...r)
    })
    let ans = '';

    for (let i = 0; i < crate.length; i++) {
        const row = crate[i];
        ans += crate[i][row.length - 1];
    }
    console.log("ans", ans)
}

fs.readFile('./dataset.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log("Something went wrong!");
    } else {
        peekData(data);
    }

})