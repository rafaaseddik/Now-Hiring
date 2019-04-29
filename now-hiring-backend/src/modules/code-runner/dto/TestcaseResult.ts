export abstract class TestcaseResult{
    testcaseIndex:number
    success;
    constructor(testcaseIndex:number,success:boolean){
        this.testcaseIndex = testcaseIndex;
        this.success = success;
    }
}
