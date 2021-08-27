class Stack {
    constructor(initialStack = []) {
        if(typeof(initialStack) !== typeof([])) throw `initialStack must be of type ${typeof([])}`;
        this.container = [...initialStack];
    }

    push(element) {
        this.container.push(element);
    }

    pop() {
        let element = this.container.pop();
        return element;
    }

    print() {
        console.log(this.container);
    }

    count = () => this.container.length; 
}

class Queue {
    constructor(initialStack = []) {
        if(typeof(initialStack) !== typeof([])) throw `initialStack must be of type ${typeof([])}`;
        this.container = [...initialStack];
    }

    queue(element) {
        this.container.unshift(element);
    }

    dequeue() {
        return this.container.pop();
    }

    print() {
        console.log(this.container);
    }

    count = () => this.container.length; 
}

/**
 * Takes a queue and rotates it until reaching position
 * @param {Queue} queue 
 * @param {Number} position 
 */
function rotateToElement(queue, position) {
    if(typeof(queue) !== typeof(new Queue())) throw `queue must be of type ${typeof(new Queue())}`;
    if(position > queue.count() - 1) return null;
    if(position === queue.count() - 1) return queue.dequeue();
    queue.queue(queue.dequeue());
    return rotateToElement(queue, ++position);
}


for(let n = 0; n <= 16; n++) {
    // Recursion 1
    // let stack = new Stack([1]);
    // let queue = new Queue();
    // for(let i = Math.pow(2, n); i > 1; i--) {
    //     queue.queue(i);
    // }
    // let swap = false;
    // while(queue.count() > 0){
    //     stack.push(swap ? rotateToElement(queue, 0) : queue.dequeue());
    //     swap = !swap;
    // }
    let stack = [];
    for(let i = 1; i <= Math.pow(2, n); i++) stack.push(i);
    let start = Date.now();
    // Optomize 1 Best solution :)
    const count = stack.length;
    let queue = [];
    for(let i = 0; i < count - 1; i++) {
        queue.push(stack.pop());
    }
    let swap = false;
    while(queue.length > 0) {
        if(swap) {
            let count = queue.length;
            for(let i = count - 1; i > 0; i--) queue.push(queue.shift());
        }
        stack.push(queue.shift());
        swap = !swap;
    }
    // Optomize 2
    // const totalElements = stack.length;
    // let queue = [];
    // let sorted = 1;
    // while(sorted < totalElements) {
    //     for(let i = sorted; i < totalElements; i++) queue.push(stack.pop());
    //     let queueCount = queue.length;
    //     for(let i = 0; i < queueCount; i++) stack.push(queue.shift());
    //     sorted++;
    // }
    let end = Date.now();
    console.log('Elements: ', Math.pow(2, n));
    console.log('Time ', end - start);
    console.log('Ratio ', (end - start)/Math.pow(2, n));
}

let stack = [1, 2, 3, 4, 5];
const totalElements = stack.length;
let queue = [];
let sorted = 1;
while(sorted < totalElements) {
    for(let i = sorted; i < totalElements; i++) queue.push(stack.pop());
    let queueCount = queue.length;
    for(let i = 0; i < queueCount; i++) stack.push(queue.shift());
    sorted++;
}
console.log(stack);