const fs = require('fs');
const path = require('path');

function readInputFile(day) {
    try {
        const filePath = path.join(__dirname, '..', `day${day}`, 'input.txt');
        return fs.readFileSync(filePath, 'utf8').trim();
    } catch (err) {
        console.error(`Error reading input file for day ${day}:`, err);
        throw err;
    }
}

module.exports = {
    readInputFile
};