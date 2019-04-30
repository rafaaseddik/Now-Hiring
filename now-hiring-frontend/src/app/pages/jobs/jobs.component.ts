import {Component, OnInit} from '@angular/core';
import {SearchJobDTO} from "../../models/SearchJobDTO";
import {Options} from "ng5-slider";
import {ApiService} from "../../core/api-service.service";
import {Job} from "../../models/job";

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

	search = new SearchJobDTO();
	jobs: Job[] = [];
	timeP = [{
		name: 'FULL_TIME',
		value: 'Full time',
		selected: true
	}, {
		name: 'PART_TIME',
		value: 'Part time',
		selected: true
	}, {
		name: 'INTERNSHIP',
		value: 'Internship',
		selected: true
	}];

	options: Options = {
		floor: 0,
		ceil: 500,
		translate: (value: number): string => {
			return value + 'K TND';
		}
	};

	skillOptions: Options = {
		floor: 1,
		ceil: 5,
		showTicks: true
	};

	constructor(private apiService: ApiService) {
		this.clickSearch();
	}

	ngOnInit() {
	}

	clickSearch() {
		let body = this.search.copy();
		body.timePlans = this.timeP.filter(v => {
			return v.selected
		}).map(v => {
			return v.name
		});
		body.minSalary *= 1000;
		body.maxSalary *= 1000;
		if (body.skill.name === '') {
			body.skill = null;
		}
		console.log("search : ", body);
		this.apiService.filterJobs(body).then(v => {
			this.jobs = v;
		});
	}

}
