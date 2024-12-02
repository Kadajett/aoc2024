const { readInputFile } = require('../utils/fileReader');

function parseInput(data) {
    // Day-specific parsing logic here
}

function solve() {
    const data = readInputFile(N); // Where N is the day number
    const parsed = parseInput(data);
    // Day-specific solution logic here

    console.log('parsed:', parsed);
}

solve();