const f = false;
const t = true;

class Point {
  constructor(x, y, stepCount){
    this.x = x;
    this.y = y;
    this.stepCount = stepCount;
  }

  getNext() {
    let x = this.x;
    let y = this.y;
    return [
      new Point(x - 1, y, this.stepCount + 1),
      new Point(x + 1, y, this.stepCount + 1),
      new Point(x, y - 1, this.stepCount + 1),
      new Point(x, y + 1, this.stepCount + 1),
    ]
  }

  isValid(xLength, yLength) {
    return this.y > -1 && this.x > -1 && this.x < xLength && this.y < yLength;
  }
}

class ShortestPathBoard {
  constructor(board, start) {
    this.board = board;
    this.start = start;
    this.yLength = board.length;
    this.xLength = board[0].length;
    this.visited = this.createVisited();
    this.traversed = false;
  }

  createVisited() {
    let visited = [];
    this.board.forEach(row => {
      visited.push(new Array(row.length).fill(Infinity));
    })
    visited[this.start.y][this.start.x] = 0;
    return visited;
  }

  traverse() {
    if(this.traversed) return;
    if(this.board[this.start.y][this.start.x]) {
      console.log("No possible path");
    }

    let queue = [this.start];
    
    while(queue.length > 0) {
      let current = queue.shift();
      let next = current.getNext();
      next.forEach(point => {
        if(point.isValid(this.yLength, this.xLength) && !this.board[point.y][point.x]) {
          if(this.visited[point.y][point.x] > point.stepCount) {
            this.visited[point.y][point.x] = point.stepCount;
            queue.push(point);
          }
        }
      });
    }
    this.traversed = true;
  }

  getDistance(point) {
    if(!point.isValid(this.xLength, this.yLength)) return null;
    if(!this.traversed) this.traverse();
    if(this.visited[point.y][point.x] === Infinity) return null;
    return this.visited[point.y][point.x];
  }
}

let matrix = [
  [f, f, f, f],
  [t, t, f, t],
  [f, f, f, f],
  [f, f, f, f]];

let board = new ShortestPathBoard(matrix, new Point(0, 3, 0))
console.log(board.getDistance(new Point(0, 0)));
console.log(board.visited);
