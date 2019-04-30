import {AddQCMQuestion, QCMQuestion} from "./QCMQuestion";
import {Submission} from "./Submission";

export class QCMTest {
	_id: string;
	title: string;
	description: string;
	questions: QCMQuestion[] = [];
	jobOfferId: string;
	submission : Submission;
}

export class AddQCMTestDTO {
	_id: string;
	title: string;
	description: string;
	questions: AddQCMQuestion[] = [];
	jobOfferId: string;
	numberOfQuestions: number = 0;

	adapt() {
		let result = new QCMTest();
		result.title = this.title;
		result._id = this._id;
		result.jobOfferId = this.jobOfferId;
		result.questions = this.questions.map(v => {
			return v.adapt();
		});
		return result;
	}
}