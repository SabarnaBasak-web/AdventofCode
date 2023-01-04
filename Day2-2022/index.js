const fs = require('fs');
// A/X -> ROCK
// B/Y -> PAPER
// C/Z -> SCISSOR


const opponentMove = ['', 'A', 'B', 'C'];
const myMove = ['', 'X', 'Y', 'Z'];

const calculateMaxPoints = (data) => {
    let totalPoints = 0;
    data.split(/\r?\n/).forEach(line => {
        if (line) {
            const turnValues = line.split(' ');
            // first one is opponent second index is mine
            // first index is rock and second index is paper then - win (6)
            // first index is paper and second index is rock then - lose (0)
            // first index is scissor and second index is scissor then - draw (3)
            let opponentMoveIndex = opponentMove.indexOf(turnValues[0]);
            let myMoveIndex = myMove.indexOf(turnValues[1]);
            let pointDifference = opponentMoveIndex - myMoveIndex;
            if (pointDifference === 0) {
                totalPoints += myMoveIndex + 3;
            }
            else if (opponentMoveIndex === 3 && myMoveIndex === 1) totalPoints += myMoveIndex + 6;
            else if (opponentMoveIndex === 1 && myMoveIndex === 3) totalPoints += myMoveIndex + 0;
            else if (pointDifference === -1 || pointDifference === -2)
                totalPoints += myMoveIndex + 6;
            else if (pointDifference === 2 || pointDifference === 1)
                totalPoints += myMoveIndex + 0;
        }
    });

    console.log('Total points', totalPoints)
}
// Second part 
// X -> lose
// Y -> draw
// Z -> win
const calculateMove = (data) => {
    let totalPoints = 0;
    data.split(/\r?\n/).forEach(line => {
        if (line) {
            const turnValues = line.split(' ');

            const opponentMoveIndex = opponentMove.indexOf(turnValues[0]);
            if (turnValues[1] === 'X') {
                if (opponentMoveIndex === 1)
                    totalPoints += 3;
                else
                    totalPoints += opponentMoveIndex - 1;
            }
            else if (turnValues[1] === 'Y') {
                totalPoints += opponentMoveIndex + 3;
            }
            else if (turnValues[1] === 'Z') {
                if (opponentMoveIndex === 3) {
                    totalPoints += 7;
                } else totalPoints += opponentMoveIndex + 1 + 6
            }
        }
    });
    console.log("total points", totalPoints);
}

fs.readFile('./dataset.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log('Something went wrong!');
    } else {
        // calculateMaxPoints(data);
        calculateMove(data);
    }
})