import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../core/api-service.service";
import {AuthenticationService} from "../../../core";
import {FileSnippet} from "../resume/resume.component";

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

	userId = "";
	user: User;
	backgroundForLevel = ["#03b104", "#8bc43f", "#8bc43f", "#26a9e1", "#f6931e", "#d20001"];

	constructor(private route: ActivatedRoute, private apiService: ApiService, public authService: AuthenticationService) {
		this.userId = this.route.snapshot.paramMap.get('id');
		this.apiService.getCandidateById(this.userId).then(d => {
			this.user = d.data.user;
			this.apiService.getResumeByCandidateId(this.userId).then(d => {
				if (d && d._id) {
					this.user.resume = d;
				}
			})
		});
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
				this.user.imageUrl = d.url;
				cred.user.imageUrl = d.url;
				this.apiService.updateCandidate(cred.user).then(x => {
				});
				this.authService.setCredentials(cred);
			});
		});

		reader.readAsDataURL(file);
	}

}
