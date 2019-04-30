import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {Job} from "../../../models/job";
import {AddQCMTestDTO} from "../../../models/QCMTest";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../core/api-service.service";
import {AuthenticationService} from "../../../core";
import {AddQCMQuestion, Answer} from "../../../models/QCMQuestion";
import {DevTest} from "../../../models/DevTest";
import {Testcase} from "../../../models/Testcase";
import {FileSnippet} from "../../user/resume/resume.component";

@Component({
	selector: 'app-add-dev-test',
	templateUrl: './add-dev-test.component.html',
	styleUrls: ['./add-dev-test.component.scss']
})
export class AddDevTestComponent implements OnInit {

	offerId = "";
	user: User;
	job: Job;
	test = new DevTest();
	folderHash = 'f';
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

	numberOfTestCasesChanged() {
		while (this.test.testcases.length < this.test.numberOfTestCases) {
			this.test.testcases.push(new Testcase());
		}

		while (this.test.testcases.length > this.test.numberOfTestCases) {
			this.test.testcases.pop();
		}
	}

	addTest() {
		this.uploadTestCaseFiles(0);
	}

	uploadTestCaseFiles(index: number) {
		console.log(index);
		if (index >= this.test.testcases.length) {
			this.doneUpload();
			return;
		}
		const testCase = this.test.testcases[index];
		const inputFile: File = (<HTMLInputElement>document.getElementById(index + '1')).files[0];
		const outputFile: File = (<HTMLInputElement>document.getElementById(index + '2')).files[0];
		let cred = this.authService.credentials;

		const inputReader = new FileReader();
		const outputReader = new FileReader();
		inputReader.addEventListener('load', (event: any) => {
			const selectedInputFile = new FileSnippet(event.target.result, inputFile);

			outputReader.addEventListener('load', (event2: any) => {
				const selectedOutputFile = new FileSnippet(event2.target.result, outputFile);
				this.apiService.uploadTestCaseFiles(selectedInputFile.file, selectedOutputFile.file, 1, this.folderHash).then(d => {
					this.folderHash = d.folderHash;
					this.test.testcases[index] = d.testcase;
					this.uploadTestCaseFiles(index + 1);
				});
			});
			outputReader.readAsDataURL(outputFile);
		});
		inputReader.readAsDataURL(outputFile);
	}

	doneUpload() {
		let body = this.test;
		body.jobOfferId = this.offerId;
		this.apiService.addDevTest(body).then(d => {
			this.router.navigate(['/jobs', this.offerId]);
		});
	}

}
