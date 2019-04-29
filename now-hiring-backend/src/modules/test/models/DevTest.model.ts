import {Test} from "./Test.model";
import {Testcase} from "./Testcase.model";

export interface DevTest extends Test{
    programmingLanguage:string;
    statement:string;
    testcases:[Testcase]
}
