function traverseArray(a) {
    if(a.length <= 1) return true;
    let accessors = { 0 : []};
    for(let i = 0; i < a.length; i++) {
        for(let j = i; j < i + a[i]; j++) {
            if(!accessors.hasOwnProperty(j+a[i])) accessors[j+a[i]] = [];
            accessors[j+a[i]].push(i);
        }
    }
    console.log(accessors);
    if(!accessors.hasOwnProperty(a.length - 1)) return false;
}

console.log(traverseArray([1, 3, 1, 2, 0, 1]))
console.log(traverseArray([1, 2, 1, 0, 0]))
console.log(traverseArray([0, 0, 0]))
console.log(traverseArray([0]))
console.log(traverseArray([1, 0]))