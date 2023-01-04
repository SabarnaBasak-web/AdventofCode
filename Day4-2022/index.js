const fs = require('fs');

function calculate(data) {
    let count = 0;
    data.split("\n").forEach(row => {
        // 2-4,6-8
        // 6-6,4-6
        const items = row.split(",");
        const firstItem = items[0].trim().split('-');
        const secondItem = items[1].trim().split('-');
        // First part
        // if ((+firstItem[0] <= +secondItem[0] && +firstItem[1] >= +secondItem[1])
        //     || (+secondItem[0] <= +firstItem[0] && +secondItem[1] >= +firstItem[1]))
        //     count += 1;

        // Second part
        if ((+firstItem[0] <= +secondItem[0] && +firstItem[1] >= +secondItem[1])
            || (+secondItem[0] <= +firstItem[0] && +secondItem[1] >= +firstItem[1])
            || (+secondItem[0] > +firstItem[0] && +secondItem[0] < +firstItem[1] && +secondItem[1] > +firstItem[1] && +secondItem[1] > +firstItem[0])
            || (+firstItem[0] > +secondItem[0] && +firstItem[0] < +secondItem[1] && +firstItem[1] > +secondItem[0] && +firstItem[1] > +secondItem[1]
                || (+firstItem[0] === +secondItem[1] || (+firstItem[1] === +secondItem[0])))
        ) {
            count += 1;
        }
    });

    console.log("Count ", count);
}

fs.readFile('./dataset.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log("Something went wrong!");
    } else {
        data.trim();
        calculate(data);
    }

})