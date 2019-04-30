import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {Job} from "../../../models/job";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../core/api-service.service";
import {AuthenticationService} from "../../../core";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {AddQCMTestDTO, QCMTest} from "../../../models/QCMTest";
import {AddQCMQuestion, Answer, QCMQuestion} from "../../../models/QCMQuestion";

@Component({
	selector: 'app-add-qcm',
	templateUrl: './add-qcm.component.html',
	styleUrls: ['./add-qcm.component.scss']
})
export class AddQCMComponent implements OnInit {

	offerId = "";
	user: User;
	job: Job;
	test = new AddQCMTestDTO();

	editorConfig: AngularEditorConfig = {
		editable: true,
		spellcheck: true,
		height: '25rem',
		minHeight: '5rem',
		placeholder: 'Test Description',
		translate: 'no'
	};

	constructor(private route: ActivatedRoute, private apiService: ApiService, public authService: AuthenticationService, private router: Router) {
		this.route.parent.params.subscribe(params => {
			this.offerId = params['id'];
			this.apiService.getOfferById(this.offerId).then(d => {
				this.user = d.company;
				this.job = d;
			});
		});
	}

	ngOnInit() {
	}

	get timePlan() {
		if (this.job) {
			switch (this.job.timePlan) {
				case 'FULL_TIME':
					return 'Full Time';
				case 'PART_TIME':
					return 'Part Time';
				case 'INTERNSHIP':
					return 'Internship';
			}
		}
		return '';
	}

	numberOfQuestionsChanged() {
		while (this.test.questions.length < this.test.numberOfQuestions) {
			this.test.questions.push(new AddQCMQuestion());
		}

		while (this.test.questions.length > this.test.numberOfQuestions) {
			this.test.questions.pop();
		}
	}

	/*removeAnswer(questionIndex, answerIndex) {
		console.log(questionIndex,answerIndex);
		console.log(this.test.questions[questionIndex]);
		this.test.questions[questionIndex].possibleAnswers.splice(answerIndex, 1);
		let index = this.test.questions[questionIndex].selectedIndex.indexOf(answerIndex);
		if (index > -1){
			console.log(index);
			this.test.questions[questionIndex].selectedIndex.splice(index, 1)
		}
		console.log(this.test.questions[questionIndex]);
	}

	addAnswer(questionIndex) {
		this.test.questions[questionIndex].possibleAnswers.push('');
	}

	selectAnswer(questionIndex, answerIndex) {
		if (this.isCorrectAnswer(questionIndex, answerIndex)) {
			let index = this.test.questions[questionIndex].selectedIndex.indexOf(answerIndex);
			this.test.questions[questionIndex].selectedIndex.splice(index, 1)
		} else {
			this.test.questions[questionIndex].selectedIndex.push(answerIndex)
		}
	}*/

	removeAnswer(questionIndex, answerIndex) {
		this.test.questions[questionIndex].answers.splice(answerIndex, 1);
	}

	addAnswer(questionIndex) {
		this.test.questions[questionIndex].answers.push(new Answer());
	}

	selectAnswer(answer: Answer) {
		answer.isSelected = !answer.isSelected
	}

	addTest() {
		let body = this.test.adapt();
		body.jobOfferId = this.offerId;
		this.apiService.addKnowledgeTest(body).then(d => {
			this.router.navigate(['/jobs', this.offerId]);
		});
	}

}

