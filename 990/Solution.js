


function GetPathsToStairOriginal(target, skipSteps) {
    if(target === 0) return 1;
    let paths = 0;
    skipSteps.forEach(skipStepCount => {
        if(target - skipStepCount > -1) {
            paths += GetPathsToStair(target - skipStepCount, skipSteps);
        }
    });
    return paths;
}

const PathToStair = {};

function GetPathsToStairMemoized(target, skipSteps) {
    if(target === 0) return 1;
    let paths = 0;
    skipSteps.forEach(skipStepCount => {
        if(target - skipStepCount > -1) {
            if(PathToStair[target - skipStepCount]) {
                paths += PathToStair[target - skipStepCount];
            } else {
                PathToStair[target - skipStepCount] = GetPathsToStair(target - skipStepCount, skipSteps);
                paths += PathToStair[target - skipStepCount];
            }
        }
    });
    return paths;
}

console.log(GetPathsToStairMemoized(125, [1, 2, 3, 4, 5]));
console.log(GetPathsToStairOriginal(40, [1, 2, 3, 4, 5]));