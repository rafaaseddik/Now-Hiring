export class QCMQuestion {
	_id: string;
	statement: string;
	possibleAnswers: string[] = [];
	correctAnswers: string[] = [];
}

export class AddQCMQuestion {
	statement: string;
	answers: Answer[] = [];

	adapt() {
		let result = new QCMQuestion();
		result.statement = this.statement;
		this.answers.forEach(elm => {
			result.possibleAnswers.push(elm.content);
			if (elm.isSelected) {
				result.correctAnswers.push(elm.content);
			}
		});
		return result;
	}
}

export class Answer {
	content: string;
	isSelected: boolean;
}
