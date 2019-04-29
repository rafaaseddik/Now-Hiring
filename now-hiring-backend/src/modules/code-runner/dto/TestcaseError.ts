import {TestcaseResult} from "./TestcaseResult";

export enum ErrorType  {
    TIME_LIMIT_EXCEDED="TIME_LIMIT_EXCEDED",
    RUNTIME_ERROR="RUNTIME_ERROR",
    WRONG_ANSWER="WRONG_ANSWER"
}
export class TestcaseError extends TestcaseResult{
    errorType:ErrorType;
    constructor(testcaseIndex:number,errorType:ErrorType){
        super(testcaseIndex,false);
        this.errorType = errorType;
    }
}
