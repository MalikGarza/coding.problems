const LAND = 1;
const WATER = 0;
function findIslands(map){
    let visited = [];
    let numIslands = 0;
    map.forEach(row => {
        visited.push((new Array(row.length)).fill(false));
    });
    for(let x = 0; x < map.length; x++) {
        for(let y = 0; y < map[x].length; y++){
            if(map[x][y] === LAND && !visited[x][y]) {
                numIslands++;
                DFS(map, x, y, visited);
            }
        }
    }
    console.log(map);
    console.log(visited);
    return numIslands;
}

function DFS(map, x, y, visited){
    let xBoundary = map.length;
    if(x < 0 || x >= xBoundary) return;
    let yBoundary = map[x].length;
    if(y < 0 || y >= yBoundary || visited[x][y] || map[x][y] === WATER) return;
    visited[x][y] = true;
    let left =  y - 1;
    let right =  y + 1;
    let up = x - 1;
    let down = x + 1;
    DFS(map, up, left, visited);
    DFS(map, up, y, visited);
    DFS(map, up, right, visited);
    DFS(map, x, left, visited);
    DFS(map, x, right, visited);
    DFS(map, down, left, visited);
    DFS(map, down, y, visited);
    DFS(map, down, right, visited);
}

const noIslands = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

const oneIsland = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
]

const allLand = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
]

const fourIslands = [
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 0, 0, 0],
]

const randomIslands = [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
]

console.log(findIslands(noIslands));
console.log(findIslands(oneIsland));
console.log(findIslands(allLand));
console.log(findIslands(fourIslands));
console.log(findIslands(randomIslands));


