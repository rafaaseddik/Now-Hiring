import {Component, OnInit} from '@angular/core';
import {Job} from "../../../models/job";
import {AuthenticationService} from "../../../core";
import {Skill} from "../../../models/Skill";
import {ApiService} from "../../../core/api-service.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-add-job',
	templateUrl: './add-job.component.html',
	styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

	constructor(private authService: AuthenticationService, private apiService: ApiService, private router: Router) {
	}

	job: Job = new Job();

	ngOnInit() {
	}

	removeSkill(index) {
		this.job.skills.splice(index, 1)
	}

	addSkill() {
		this.job.skills.push(new Skill())
	}

	submit() {
		let body = JSON.parse(JSON.stringify(this.job));
		body.company = this.authService.credentials.user._id;
		this.apiService.addJob(body).then(d => {
			this.router.navigate(['/jobs', d._id])
		});
	}
}
