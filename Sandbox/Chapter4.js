class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}

class Tree {
    root;
    constructor(root){
        this.root = root ?? null;
    }

    add(value) {
        let node = new Node(value);
        if(this.root) {
            let current = this.root;
            this.placeNode(current, node);
        } else {
            this.root = node;
        }
    }

    placeNode(current, nodeToPlace){
        if(nodeToPlace.value === current.value) return;
        if(nodeToPlace.value < current.value) {
            if(current.left === null) current.left = nodeToPlace;
            else this.placeNode(current.left, nodeToPlace);
        } else {
            if(current.right === null) current.right = nodeToPlace;
            else this.placeNode(current.right, nodeToPlace);
        }
    }

    inOrder() {
        let arr = [];
        if(this.root) arr = this.#inOrderTraversal(this.root, arr);
        return arr;
    }

    #inOrderTraversal(node) {
        let arr = []
        if(node.left) arr.push(...this.#inOrderTraversal(node.left));
        arr.push(node.value);
        if(node.right) arr.push(...this.#inOrderTraversal(node.right));
        return arr;
    }

    /**
     * Question 2.
     * Given an ordered array, construct a tree with minimal levels.
     * @param {Array} orderedArray 
     */
    addArrayToTree(orderedArray){
        if(orderedArray.length <= 1){
            for(const index in orderedArray){
                this.add(orderedArray[index]);
            }
        }
        else {
            let midpoint = Math.floor(orderedArray.length/2);
            this.add(orderedArray[midpoint]);
            this.addArrayToTree(orderedArray.slice(0, midpoint));
            this.addArrayToTree(orderedArray.slice(-1*midpoint));
        }
    
    }

    /**
     * Question 4: Given a BST, check if it is balanced.
     */
    isBalanced() {
        return this.#subTreeHeight(this.root, 0);
    }

    #subTreeHeight(node, count) {
        if(node === null) return count;
        count += 1
        return Math.abs(this.#subTreeHeight(node.left, count) - this.#subTreeHeight(node.right, count)) <= 1;
    }

    isBST() {
        return this.compareNodes(this.root);
    }

    compareNodes(node){
        if(node === null) return true;
        if(node.left){
            if(node.value < node.left.value) return false;
            else return this.compareNodes(node.left);
        }
        if(node.right){
            if(node.value > node.right.value) return false;
            else return this.compareNodes(node.right);
        }
        return true;
    }
}


let arr = [];
let count = 1;
let length = 8;
while(count < length) {
    arr.push(count);
    count++
}
let tree = new Tree();
tree.addArrayToTree(arr);
// console.log(tree.root);
// console.log(tree.inOrder());

/**
 * Question 3
 */
class LinkedList {
    constructor(head, tail){
        this.head = head ?? null;
        this.tail = tail ?? head ?? null;
        this.length = this.count();

    }

    add(node) {
        this.length += 1;
        if(this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node
        this.tail = node;
    }

    toString() {
        let current = this.head;
        let arr = [current];
        while(current.next) {
            arr.push(current.next);
            current = current.next;
        }
        return arr.join(" --> ")
    }

    count() {
        if(this.head && this.head === this.tail) return 1;
        let count = 0;
        let current = this.head;
        while(current?.next) {
            count++;
            current = current.next;
        } 
        return count
    }
}
let height = 1;
let root = tree.root;
let levels = {};
function traverseTree(node, levels, count) {
    if(node === null) return;
    count += 1;
    if(!levels.hasOwnProperty(count)) levels[count] = new LinkedList();
    levels[count].add(node);
    traverseTree(node.left, levels, count);
    traverseTree(node.right, levels, count);
}
traverseTree(tree.root, levels, 0);
// console.log(levels);

// console.log('isBalanced: ', tree.isBalanced());
console.log('Question 4: is BST: ', tree.isBST());


/**
 * Quesiton 5: given a node, find its next in - order successor (left, node, right)
 * @param {Node} node 
 * @returns 
 */
function findInOrderSuccessor(node){
    if(node === null) return null;
    if(node.right !== null) {
        return getLeftMostChild(node.right)
    }
    let parent = node.parent;
    let current = node;
    while(parent !== null && parent.left !== current){
        current = parent;
        parent = parent.parent;
    }
    return parent;
}

function getLeftMostChild(node){
    while(node?.left !== null) node = node.left;
    return node;
}


let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
let dependencies = [ ['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
let dependencyRelation = {}
for(const index in dependencies) {
    let project = dependencies[index][0];
    let dependency = dependencies[index][1];
    if(!dependencyRelation.hasOwnProperty(project)) dependencyRelation[project] = [];
    dependencyRelation[project].push(dependency);
}
for(let i = 0; i < projects; i++) {
    let project = projects[i];
    if(!dependencyRelation.hasOwnProperty(project)) throw new Error('All Projects were not built');
}