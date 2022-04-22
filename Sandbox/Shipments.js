function getTotalImbalancesByWindowSize(shipmentMinMax, windowSize) {
    let imbalance = 0;
    for(let index = 1; index <= shipments.length - windowSize; index++) {
        let min1 = shipmentMinMax[index][0];
        let max1 = shipmentMinMax[index][1];
        let min2 = shipmentMinMax[index + windowSize - 1][0];
        let max2 = shipmentMinMax[index + windowSize - 1][1];
        let min = min1 >= min2 ? min2 : min1;
        let max = max1 <= max2 ? max2 : max1;
        imbalance += max - min;
    }
    return imbalance
}

function getImbalance(shipments) {
    if(shipments.length <= 1) return 0;
    let shipmentMinMax = new Array(shipments.length);
    
    shipmentMinMax[0] = [shipments[0], shipments[0]]
    
    for(let i = 1; i < shipments.length; i++) {
        let min = shipmentMinMax[i-1][0];
        let max = shipmentMinMax[i-1][1];
        let current = shipments[i];
        if(current < min) min = current;
        if(current > max) max = current;
        shipmentMinMax[i] = [min, max];
    }

    let imbalance = 0;

    for(let i = 0; i < shipmentMinMax.length; i++) {
        imbalance += shipmentMinMax[i][1] - shipmentMinMax[i][0];
    }

    for(let windowSize = 2; windowSize < shipments.length; windowSize++) {
        getTotalImbalancesByWindowSize(shipmentMinMax, windowSize);
    }

    return imbalance;
}

const shipments = [3, 2, 3];
console.log(getImbalance(shipments));

const shipments2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(getImbalance(shipments2));

const shipments3 = [
    1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1
];
console.log(getImbalance(shipments3));

const NUM_SHIPMENTS = 50000000;
const WEIGHT_RANGE = 9007199254740991;
let randomShipments = [];
for(let i = 0; i < NUM_SHIPMENTS; i++) {
    randomShipments.push(Math.ceil(Math.random() * WEIGHT_RANGE) % WEIGHT_RANGE + 1);
}
console.log(randomShipments)
const start = new Date();
console.log(getImbalance(randomShipments));
const end = new Date();
console.log((end - start));