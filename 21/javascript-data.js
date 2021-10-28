let lectures = [[30, 75], [0, 50], [60, 150]];

function Start(array) {return array[0]};
function End(array) {return array[1]};

lectures.sort((first, second) => Start(first) - Start(second));

let starts = lectures.map(lecture => Start(lecture));
let ends = lectures.map(lecture => End(lecture));

let currentMax = 0;
let currentOverlap = 0;
let i = 0;
let k = 0;

while(i < lectures.length && k < lectures.length) {
  if(starts[i] < ends[k]) {
    currentOverlap++;
    currentMax = Math.max(currentMax, currentOverlap)
    i++;
  } else {
    currentOverlap--;
    k++;
  }
}
console.log(currentMax);