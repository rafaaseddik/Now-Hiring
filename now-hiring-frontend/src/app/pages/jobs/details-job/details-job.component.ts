import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../core/api-service.service";
import {AuthenticationService} from "../../../core";
import {User} from "../../../models/User";
import {Job} from "../../../models/job";
import {QCMQuestion} from "../../../models/QCMQuestion";
import {QCMTest} from "../../../models/QCMTest";
import {DevTest} from "../../../models/DevTest";

@Component({
	selector: 'app-details-job',
	templateUrl: './details-job.component.html',
	styleUrls: ['./details-job.component.scss']
})
export class DetailsJobComponent implements OnInit {

	offerId = "";
	user: User;
	job: Job;
	knowledgeTests: QCMTest[] = [];
	devTests: DevTest[] = [];
	submissions: User[] = [];

	constructor(private route: ActivatedRoute, private apiService: ApiService, public authService: AuthenticationService) {
		this.route.parent.params.subscribe(params => {
			this.offerId = params['id'];
			this.apiService.getOfferById(this.offerId).then(d => {
				this.user = d.company;
				this.job = d;
			});
			this.apiService.getKnowledgeTestByJobId(this.offerId).then(d => {
				this.knowledgeTests = d;
			});
			this.apiService.getDevTestByJobId(this.offerId).then(d => {
				this.devTests = d;
			});
			this.apiService.getSubmissionsByJobId(this.offerId).then((d:any[])=>{
				this.submissions =d;
				this.submissions.forEach(e=>{
					this.apiService.getResumeByCandidateId(e._id).then(d=>{
						if (d && d._id) {
							e.resume = d;
						}
					})
				});
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


	removeTest(test, index) {
		this.apiService.removeKnowledgeTestById(test._id).then(d => {
		});
		this.knowledgeTests.splice(index, 1);
	}

	removeDevTest(test,index){
		this.apiService.removeDevTestById(test._id).then(d => {
		});
		this.devTests.splice(index, 1);
	}

}
