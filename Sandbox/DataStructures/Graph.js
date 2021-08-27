class Node {
    name;
    children = [];
    constructor(name, children){
        this.name = name;
        this.children = children ?? [];
    }
}

class Graph {
    nodes = {};
    nodeToIndex = {};
    indexToNode = {};
    constructor(nodes){
        for(let i = 0; i < nodes.length; i++){
            let node = nodes[i];
            this.nodes[node.name] = node.children.map(child => child.name);
        }
        for(let i = 0; i < nodes.length; i++){
            let children = nodes[i].children;
            for(let k = 0; k < children.length; k++) {
                let child = children[k];
                if(!this.nodes.hasOwnProperty(child.name)){
                    this.nodes[child.name] = child.children.map(grandchild => grandchild.name);
                }
            }
        }
        let nodesArray = Object.getOwnPropertyNames(this.nodes);
        for(const node in this.nodes){
            let nodeIndex = nodesArray.indexOf(node);
            this.nodeToIndex[node] = nodeIndex;
            this.indexToNode[nodeIndex] = node;
        }
    }

    toString() {
        let matrix = this.#getAdjacencyMatrix();
        let retVal = '\n\t';
        for(const index in this.indexToNode){
            retVal += `${this.indexToNode[index]}\t`;
        }
        retVal += '\n\n  ';
        for(let i = 0; i < matrix.length; i++){
            retVal += `${this.indexToNode[i]}`;
            for(let k = 0; k < matrix[i].length; k++){
                retVal += `\t${matrix[i][k]} `;
            }
            retVal += '\t\n\n  ';
        }
        return retVal;
    }

    #populateNodes(node){
        if(this.nodes.hasOwnProperty[node.name]) return;
        this.nodes[node.name] = node.children.map(child => child.name);
        if(node.children)
            for(let i = 0; i < node.children.length; i++){
                this.#populateNodes(node.children[i]);
            }
    }

    #getAdjacencyMatrix() {
        let matrix = [];
        let nodesArray = Object.getOwnPropertyNames(this.nodes);
        //create the base matrix
        for(let i = 0; i < nodesArray.length; i++){
            matrix.push(new Array(nodesArray.length).fill("-"));
        }
        //fill in ones for interesections
        for(const node in this.nodes){
            let index = this.nodeToIndex[node];
            matrix[index][index] = "X";
            for(let i = 0; i < this.nodes[node].length ; i++){
                let child = this.nodes[node][i];
                let childIndex = this.nodeToIndex[child];
                matrix[index][childIndex] = "X";
            }
        }
        return matrix;
    }

    getAdjacency(type){
        type = type.toUpperCase();
        if(type !== "LIST" && type !== "MATRIX") throw new TypeError("type must be either LIST or MATRIX");
        if(type === "LIST") return this.nodes;
        return this.#getAdjacencyMatrix();
    }

    hasPath(start, end){
        if(!this.nodes.hasOwnProperty(start.name) || !this.nodes.hasOwnProperty(end.name)) return null;
        let visited = {};
        let queue = [start.name];
        visited[start.name] = 'S';
        while(queue.length > 0) {
            let current = queue.shift();
            if(current === end.name){
                visited[current] = 'E';
                console.log(visited);
                return visited;
            } 
            for(let index = 0; index < this.nodes[current].length; index++){
                let nextNode = this.nodes[current][index];
                if(!visited.hasOwnProperty(nextNode)) {
                    visited[nextNode] = current;
                    queue.push(nextNode);
                }
            }
        }
        console.log(visited);
        return null;
    }
}

// let nodes = [];
// let orphanNodes = [];
// let numOrphans = 15;
// let numParents = 15;
// let numChildren = 2;

// //create orphans
// for(let i = 1; i <= numOrphans; i++){
//     let newNode = new Node(`${i}`);
//     orphanNodes.push(newNode);
// }

// //give the orphans parent nodes
// for(let i = 1; i <= numParents; i++){
//     let children = new Set();
//     for(let k = 0; k < numChildren; k++){
//         let randomIndex = Math.floor(Math.random() * 100) % orphanNodes.length;
//         children.add(orphanNodes[randomIndex]);
//     }
//     let newNode = new Node(`${i}`, Array.from(children));
//     nodes.push(newNode);
// }
/**
 * {
  '1': [ '13', '12' ],
  '2': [ '2', '12' ],
  '3': [ '10', '2' ],
  '4': [ '3', '14' ],
  '5': [ '14', '9' ],
  '6': [ '8', '11' ],
  '7': [ '10', '3' ],
  '8': [ '3', '6' ],
  '9': [ '12', '1' ],
  '10': [ '3', '12' ],
  '11': [ '11', '15' ],
  '12': [ '4', '6' ],
  '13': [ '4', '8' ],
  '14': [ '15', '2' ],
  '15': [ '11', '12' ]
}

 */
let one = new Node("1");
let two = new Node("2");
let three = new Node("3");
let four = new Node("4");
let five = new Node("5");
let six = new Node("6");
let seven = new Node("7");
let eight = new Node("8");
let nine = new Node("9");
let ten = new Node("10");
let eleven = new Node("11");
let twelve = new Node("12");
let thirteen = new Node("13");
let fourteen = new Node("14");
let fifteen = new Node("15");
one.children = [thirteen, twelve];
two.children = [two, twelve];
three.children = [ten, two];
four.children = [three, fourteen];
five.children = [fourteen, nine];
six.children = [eight, eleven];
seven.children = [ten, three];
eight.children = [three, six];
nine.children = [twelve, one];
ten.children = [three, twelve];
eleven.children = [eleven, fifteen];
twelve.children = [four, six];
thirteen.children = [four, eight];
fourteen.children = [fifteen, two];
fifteen.children = [eleven, two]
let nodes = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen];

let graph = new Graph(nodes);
for(let i = 0; i < nodes.length; i++) {
    let start = nodes[0];
    let end = nodes[i];
    if(graph.hasPath(start, end)) console.log(`There is a path from ${start.name} to ${end.name}`);
    else console.log(`No path exists from ${start.name} to ${end.name}`);
}
console.log(graph.toString());

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
a.children = [d];
b.children = [d];
d.children = [c];
f.children = [a, b];
nodes = [a, b, c, d, e, f];
graph = new Graph(nodes);
console.log(graph.toString());

