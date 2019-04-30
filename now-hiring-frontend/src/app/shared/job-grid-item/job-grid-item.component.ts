import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../../models/job";

@Component({
	selector: 'app-job-grid-item',
	templateUrl: './job-grid-item.component.html',
	styleUrls: ['./job-grid-item.component.scss']
})
export class JobGridItemComponent implements OnInit {

	@Input() job: Job;

	constructor() {
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

}
