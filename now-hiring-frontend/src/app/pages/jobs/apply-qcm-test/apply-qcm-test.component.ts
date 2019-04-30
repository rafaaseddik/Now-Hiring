import {Component, OnInit} from '@angular/core';
import {DevTest} from "../../../models/DevTest";
import {QCMTest} from "../../../models/QCMTest";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../core/api-service.service";
import {AuthenticationService} from "../../../core";
import {QCMTestSubmission} from "../../../models/QCMTestSubmission";

@Component({
	selector: 'app-apply-qcm-test',
	templateUrl: './apply-qcm-test.component.html',
	styleUrls: ['./apply-qcm-test.component.scss']
})
export class ApplyQcmTestComponent implements OnInit {

	test: QCMTest;
	submission = new QCMTestSubmission();
	testId: string;
	offerId: string;
	currentIndex = 0;

	constructor(private route: ActivatedRoute, private apiService: ApiService, public authService: AuthenticationService, private router: Router) {
		this.testId = this.route.snapshot.paramMap.get('testId');
		this.route.parent.params.subscribe(params => {
			this.offerId = params['id'];
			this.apiService.getKnowledgeTestByJobId(this.offerId).then((d: QCMTest[]) => {
				this.test = d.filter(d => {
					return d._id == this.testId;
				})[0];
			});
			this.submission.candidate = this.authService.credentials.user._id;
			this.submission.knowledgeTest = this.testId;
		});
	}

	ngOnInit() {
	}

	addResponse(answer: string) {
		this.submission.answers.push({
			question_id: this.test.questions[this.currentIndex]._id,
			answer: answer
		});
		this.currentIndex++;
		if (this.currentIndex == this.test.questions.length) {
			this.apiService.submitQcmTest(this.submission).then(d => {
				this.router.navigate(['/jobs', this.offerId, 'apply']);
			})
		}
	}

}
