import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../models/User";
import {ApiService} from "../../../core/api-service.service";
import {AuthenticationService} from "../../../core";
import {FileSnippet} from "../../user/resume/resume.component";
import {Job} from "../../../models/job";

@Component({
	selector: 'app-company-profile',
	templateUrl: './company-profile.component.html',
	styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

	userId = "";
	user: User;
	listJobs: Job[] = [];

	constructor(private route: ActivatedRoute, private apiService: ApiService, public authService: AuthenticationService) {
		this.userId = this.route.snapshot.paramMap.get('id');
		this.apiService.getCompanyById(this.userId).then(d => {
			this.user = d.data.user;
		});
		this.apiService.getJobsByCompanyId(this.userId).then(d => {
			this.listJobs = d;
		})
	}

	ngOnInit() {
	}

	uploadImage(imageInput: any) {
		const file: File = imageInput.files[0];
		const reader = new FileReader();
		let cred = this.authService.credentials;
		reader.addEventListener('load', (event: any) => {

			const selectedFile = new FileSnippet(event.target.result, file);
			const userId = this.user._id;
			this.apiService.uploadAvatar(selectedFile.file).then(d => {
				this.user.logoUrl = d.url;
				cred.user.logoUrl = d.url;
				this.apiService.updateCompany(cred.user).then(x => {
				});
				this.authService.setCredentials(cred);
			});
		});

		reader.readAsDataURL(file);
	}

}
