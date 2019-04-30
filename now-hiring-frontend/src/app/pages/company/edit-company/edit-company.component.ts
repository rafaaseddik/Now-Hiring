import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {AuthenticationService} from "../../../core";
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {ApiService} from "../../../core/api-service.service";
import {FileSnippet} from "../../user/resume/resume.component";
import {Router} from "@angular/router";

@Component({
	selector: 'app-edit-company',
	templateUrl: './edit-company.component.html',
	styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {

	user: User = null;
	editorConfig: AngularEditorConfig = {
		editable: true,
		spellcheck: true,
		height: '25rem',
		minHeight: '5rem',
		placeholder: 'Comapny Description',
		translate: 'no'
	};

	constructor(public authService: AuthenticationService, private apiService: ApiService, private router: Router) {
		this.user = this.authService.credentials.user;
	}

	ngOnInit() {
	}

	sumbit() {
		let cred = this.authService.credentials;
		this.apiService.updateCompany(this.user).then(d => {
			cred.user = d;
			this.authService.setCredentials(cred);
			this.router.navigate(['/company', cred.user._id]);
		})
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
