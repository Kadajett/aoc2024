const { readInputFile } = require('../utils/fileReader');

function isReportSafe(levels) {
    if (levels.length < 2) return true;
    
    const firstDiff = levels[1] - levels[0];
    const shouldIncrease = firstDiff > 0;
    
    if (firstDiff === 0 || Math.abs(firstDiff) > 3) return false;
    
    for (let i = 1; i < levels.length - 1; i++) {
        const diff = levels[i + 1] - levels[i];
        
        if (diff === 0 || Math.abs(diff) > 3) return false;
        
        if (shouldIncrease && diff < 0) return false;
        if (!shouldIncrease && diff > 0) return false;
    }
    
    return true;
}

function isReportSafeWithDampener(levels) {
    if (isReportSafe(levels)) return true;
    
    for (let i = 0; i < levels.length; i++) {
        const modifiedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];
        if (isReportSafe(modifiedLevels)) {
            return true;
        }
    }
    
    return false;
}

function parseInput(data) {
    return data.split('\n')
        .filter(line => line.trim())
        .map(line => line.split(' ')
            .map(num => parseInt(num)));
}

function solve() {
    const data = readInputFile(2);
    const reports = parseInput(data);
    
    const safeReports = reports.filter(isReportSafe);
    console.log('P1', safeReports.length);
    
    const safeReportsWithDampener = reports.filter(isReportSafeWithDampener);
    console.log('P2', safeReportsWithDampener.length);
}

solve();