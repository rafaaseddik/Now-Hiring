export class QCMTestSubmission {
	_id: string;
	candidate: string;
	knowledgeTest: string;
	answers: Answer[] = [];
}

export class Answer {
	question_id: string;
	answer: string;
}