import {AfterViewInit, Component, OnInit} from '@angular/core';
import {QCMTest} from "../../../models/QCMTest";
import {DevTest} from "../../../models/DevTest";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../core/api-service.service";
import {AuthenticationService} from "../../../core";
import {Job} from "../../../models/job";

declare const ace: any;

@Component({
	selector: 'app-apply-job',
	templateUrl: './apply-job.component.html',
	styleUrls: ['./apply-job.component.scss']
})
export class ApplyJobComponent implements OnInit, AfterViewInit {

	knowledgeTests: QCMTest[] = [];
	devTests: DevTest[] = [];
	job: Job;
	offerId = "";

	constructor(private route: ActivatedRoute, private apiService: ApiService, public authService: AuthenticationService) {
		this.route.parent.params.subscribe(params => {
			this.offerId = params['id'];
			this.apiService.getOfferById(this.offerId).then(d => {
				this.job = d;
			});
			this.apiService.getKnowledgeTestsByCandidateAndJobId(this.authService.credentials.user._id, this.offerId).then((result: any) => {
				this.knowledgeTests = result.submissions.map(v => {
					let r: QCMTest = v.knowledgeTest;
					r.submission = v.submission;
					return r;
				});
			});
			this.apiService.getDevTestsByCandidateAndJobId(this.authService.credentials.user._id, this.offerId).then((result: any) => {
				this.devTests = result.submissions.map(v => {
					let r: DevTest = v.devTest;
					r.submission = v.submission;
					return r;
				});
			});
		});
	}

	ngOnInit() {
	}

	ngAfterViewInit(): void {

	}

	submit() {
		var editor = ace.edit("editor");
		var content = editor.getValue().split('    ').join('\t');
		console.log(JSON.stringify(content));
	}


}
