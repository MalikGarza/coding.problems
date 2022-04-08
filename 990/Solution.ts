class Step {
    previousSteps
}


class DCP990 {
    targetStair: number;
    stepCounts: number[];

    constructor(targetStair, stepCounts){
        this.targetStair = targetStair;
        this.stepCounts = stepCounts;
    }

    public number[][] GetPathsToTargetStair(){
        return [[]];
    }

}