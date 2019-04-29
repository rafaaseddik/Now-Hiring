import {TestcaseResult} from "./TestcaseResult";

export class TestcaseSuccess extends TestcaseResult{
    constructor(testcaseIndex:number){
        super(testcaseIndex,true);
    }
}
