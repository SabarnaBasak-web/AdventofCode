const fs = require('fs');

const calculateMaxCalorie = (data) => {
    let calorie = [], maxCalorieList = [];
    data.split(/\r?\n/).forEach(line => {
        if (line) {
            calorie.push(+line);
        } else {
            let calorieSum = calorie.reduce((curr, next) => {
                return curr += next;
            })
            maxCalorieList.push(calorieSum);
            calorie = []
        }
    });
    maxCalorieList.sort((a, b) => b - a);
    const totalCalorie = maxCalorieList[0] + maxCalorieList[1] + maxCalorieList[2]
    console.log("Total Sum", totalCalorie);
}

fs.readFile('./dataset.txt', 'utf-8', (error, data) => {

    if (error) {
        console.log('Something went wrong!');
    } else {
        calculateMaxCalorie(data);
    }
})