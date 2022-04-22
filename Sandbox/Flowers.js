
function getLetter(input) {
    const beginning = 'A';
    return String.fromCharCode(beginning.charCodeAt(0) + input - 1);
}

function getRow(rowNumber, totalNumber) {
    if(rowNumber === totalNumber) {
        return (new Array(rowNumber * 2).fill(getLetter(rowNumber))).join("");
    }
    let currentCount = 0;
    let row = []
    for(let i = totalNumber; i >= rowNumber; i--) {
        row.push(getLetter(i));
        currentCount++;
    }
    if(currentCount < totalNumber) {
        const lastLetter = row.slice().pop();
        while(currentCount < totalNumber) {
            row.push(lastLetter);
            currentCount++;
        }
    }
    for(let i = row.length - 1; i >= 0; i--) {
        row.push(row[i]);
    }
    return row.join("");
}

function getFlowerPattern(numFlowerTypes) {
    const outterLetter = getLetter(numFlowerTypes);
    let flowerBeds = [];
    let rowNumber = numFlowerTypes;
    while(rowNumber > 0) {
        flowerBeds.push(getRow(rowNumber, numFlowerTypes));
        rowNumber--;
    }
    for(let i = flowerBeds.length - 1; i >= 0; i--) {
        flowerBeds.push(flowerBeds[i]);
    }
    return flowerBeds.join("\n");
}

//console.log(getFlowerPattern(3));
console.log([4, 3, 2, 1].slice(0, 2));
console.log([4, 3, 2, 1].slice(1, 3));
console.log([4, 3, 2, 1].slice(2, 4));
console.log([4, 3, 2, 1].slice(3, 5));