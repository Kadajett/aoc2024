const { readInputFile } = require('../utils/fileReader');

function parseInput(data) {
    const lines = data.split('\n');
    const column1 = [];
    const column2 = [];
    
    lines.forEach(line => {
        const [num1, num2] = line.trim().split(/\s+/);
        column1.push(parseInt(num1));
        column2.push(parseInt(num2));
    });
    
    return { column1, column2 };
}

function solve() {
    const data = readInputFile(1);
    const { column1, column2 } = parseInput(data);
    
    const sortedCol1 = [...column1].sort((a, b) => a - b);
    const sortedCol2 = [...column2].sort((a, b) => a - b);
    
    let totalDifference = 0;
    let similarityScore = 0;
    
    const frequencyMap = {};
    column1.forEach(leftNum => {
        frequencyMap[leftNum] = 0;
        column2.forEach(rightNum => {
            if (leftNum === rightNum) {
                frequencyMap[leftNum]++;
            }
        });
        similarityScore += leftNum * frequencyMap[leftNum];
    });

    console.log('Sorted columns and their differences:');
    for (let i = 0; i < sortedCol1.length; i++) {
        const difference = Math.abs(sortedCol1[i] - sortedCol2[i]);
        totalDifference += difference;
        console.log(`${sortedCol1[i].toString().padEnd(8)} ${sortedCol2[i].toString().padEnd(8)} Difference: ${difference}`);
    }
    
    console.log(`\nTotal sum of differences: ${totalDifference}`);
    console.log('Frequency map of left values in right column:', frequencyMap);
    console.log('Similarity Score:', similarityScore);
}

solve();
