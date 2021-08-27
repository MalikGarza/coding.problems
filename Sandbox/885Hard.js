function organizeByCharacter(arr, char, lastPosition) {
    for(let i = 0; i < arr.length; i++){ //O(n)
        if(arr[i] === char) {
            let temp = arr[lastPosition];
            arr[lastPosition] = arr[i];
            arr[i] = temp;
            ++lastPosition;
        }
    }
    return lastPosition;
}

function orderRGBArray(arr){
    let lastPosition = 0;
    lastPosition = organizeByCharacter(arr, 'R', lastPosition);
    lastPosition = organizeByCharacter(arr, 'G', lastPosition);
    lastPosition = organizeByCharacter(arr, 'B', lastPosition);
}

let arr = 'BRGRBG'.split('');
orderRGBArray(arr);
console.log(arr);
arr = 'RRRRRRRRRRRR'.split('');
orderRGBArray(arr);
console.log(arr);
arr = 'BBBBBBBBBBBBBBBB'.split('');
orderRGBArray(arr);
console.log(arr);
arr = 'GGGGGGGGGGGGGG'.split('');
orderRGBArray(arr);
console.log(arr);
arr = 'RGBBGRGBGRGBGR'.split('');
orderRGBArray(arr);
console.log(arr);
arr = 'RGRGRGRGRGRGRG'.split('');
orderRGBArray(arr);
console.log(arr);
arr = 'RBRBRBRBRBRBRB'.split('');
orderRGBArray(arr);
console.log(arr);
arr = 'BGBGBGBGBGBGBGBG'.split('');
orderRGBArray(arr);
console.log(arr);
for(let n = 0; n < 32; n++){

    let count = Math.pow(2, n);
    arr = [];
    for(let i = 0; i < count; i++){
        switch(Math.random() % 3){
            case 0: arr.push('R'); break;
            case 1: arr.push('G'); break;
            case 2: arr.push('B'); break;
        }
    }
    let start = Date.now();
    orderRGBArray(arr);
    let end = Date.now();
    console.log(end-start)
    console.log(count);
}
