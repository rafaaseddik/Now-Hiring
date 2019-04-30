import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DevTest} from "../../../models/DevTest";
import {ApiService} from "../../../core/api-service.service";
import {AuthenticationService} from "../../../core";
import {ActivatedRoute, Router} from "@angular/router";
import {TestcaseResult} from "../../../models/TestcaseResult";
import {QCMTestSubmission} from "../../../models/QCMTestSubmission";

declare const ace: any;

@Component({
	selector: 'app-apply-dev-test',
	templateUrl: './apply-dev-test.component.html',
	styleUrls: ['./apply-dev-test.component.scss']
})
export class ApplyDevTestComponent implements OnInit, AfterViewInit {

	test: DevTest;
	offerId: string;
	testId: string;
	syntaxError: boolean = null;
	testcasesResult: TestcaseResult[] = [];
	score = 0;

	constructor(private route: ActivatedRoute, private apiService: ApiService, public authService: AuthenticationService, private router: Router) {
		this.testId = this.route.snapshot.paramMap.get('testId');
		this.route.parent.params.subscribe(params => {
			this.offerId = params['id'];
			this.apiService.getDevTestByJobId(this.offerId).then((d: DevTest[]) => {
				this.test = d.filter(d => {
					return d._id == this.testId;
				})[0];
				this.initEditor();
			});
		});
	}

	initEditor() {
		let editor = ace.edit("editor");
		editor.setTheme("ace/theme/tomorrow");
		editor.session.setMode("ace/mode/python");
		document.getElementById('editor').style.fontSize = '16px';
		editor.resize();
	}

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		this.initEditor();
	}

	prepareBody() {
		this.testcasesResult = [];
		this.syntaxError = null;
		this.score = 0;
		var editor = ace.edit("editor");
		var content = editor.getValue().split('    ').join('\t');
		return {
			code: content,
			devTestId: this.testId
		};
	}

	run() {
		let body = this.prepareBody();
		this.apiService.runTest(body).then(d => {
			if (d) {
				this.testcasesResult = d.testcasesResult;
				this.syntaxError = d.syntaxError;
				if (this.testcasesResult.length > 0) {
					this.score = this.testcasesResult.filter(v => {
						return v.success
					}).length / this.testcasesResult.length;
				}
			}
		});
	}

	submit() {
		let body = this.prepareBody();
		this.apiService.runTest(body).then(d => {
			if (d) {
				if (d.testcasesResult.length > 0) {
					this.score = d.testcasesResult.filter(v => {
						return v.success
					}).length / d.testcasesResult.length;
				}
			} else {
				this.score = 0;
			}
			let submitBody = {
				candidate: this.authService.credentials.user._id,
				devTest: this.testId,
				submissionCode: body.code,
				score: this.score
			};
			this.apiService.submitDevTest(submitBody).then(d => {
				this.router.navigate(['/jobs', this.offerId, 'apply']);
			});
		});
	}

}
