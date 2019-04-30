import {Testcase} from "./Testcase";
import {Submission} from "./Submission";

export class DevTest {
	_id: string;
	title: string;
	description: string;
	programmingLanguage: string;
	statement: string;
	testcases: Testcase[] = [];
	jobOfferId: string;
	numberOfTestCases: number = 0;
	submission : Submission;
}