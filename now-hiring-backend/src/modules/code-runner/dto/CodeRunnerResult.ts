import {TestcaseResult} from "./TestcaseResult";

export class CodeRunnerResult{
    testcasesResult=[
        TestcaseResult
    ]
    syntaxError=false;
    constructor(testcaseResults,syntaxError){
        this.testcasesResult = testcaseResults;
        this.syntaxError = syntaxError;
    }
}
