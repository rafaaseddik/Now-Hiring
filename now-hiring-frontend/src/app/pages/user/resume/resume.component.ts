import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../core/api-service.service";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {AuthenticationService} from "../../../core";
import {User} from "../../../models/User";
import {Resume} from "../../../models/Resume";
import {Address} from "../../../models/Address";
import {Contact} from "../../../models/Contact";
import {Skill} from "../../../models/Skill";
import {Educationexperience, Workexperience} from "../../../models/Experience";
import {Router} from "@angular/router";

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

	user: User = null;

	constructor(private apiService: ApiService, private formuilder: RxFormBuilder,
	            private authService: AuthenticationService, private router: Router) {
		this.user = this.authService.credentials.user;
		this.manageCV();
		let cred = this.authService.credentials;
		this.apiService.getResumeByCandidateId(this.user._id).then(d => {
			this.user.resume = d;
			cred.user.resume = d;
			this.authService.setCredentials(cred);
			this.manageCV();
		});
	}

	ngOnInit() {
	}

	manageCV() {
		if (this.user.resume == null) {
			this.user.resume = new Resume();
		}
		if (this.user.address == null) {
			this.user.address = new Address()
		}
		if (this.user.contact == null) {
			this.user.contact = new Contact()
		}
		if (this.user.birthdate) {
			this.user.birthdate = this.user.birthdate.substr(0, 10);
		}
		this.user.resume.education_experience.forEach(e => {
			e.startDate = e.startDate.substr(0, 10);
			e.endDate = e.endDate.substr(0, 10);
		});
		this.user.resume.work_experience.forEach(e => {
			e.startDate = e.startDate.substr(0, 10);
			e.endDate = e.endDate.substr(0, 10);
		});
	}

	uploadCV(imageInput: any) {
		const file: File = imageInput.files[0];
		const reader = new FileReader();
		reader.addEventListener('load', (event: any) => {

			const selectedFile = new FileSnippet(event.target.result, file);
			const userId = this.user._id;
			this.apiService.uploadCV(selectedFile.file).then(d => {
				this.user = d.user;
				this.user._id = userId;
				if (this.hasResume) {
					this.user.resume._id = this.authService.credentials.user.resume._id;
				}
				this.manageCV();
			});
		});

		reader.readAsDataURL(file);
	}

	removeSkill(index) {
		this.user.resume.skills.splice(index, 1)
	}

	removeWorkExp(index) {
		this.user.resume.work_experience.splice(index, 1)
	}

	removeEduExp(index) {
		this.user.resume.education_experience.splice(index, 1)
	}

	addSkill() {
		this.user.resume.skills.push(new Skill())
	}

	addWorkExp() {
		this.user.resume.work_experience.push(new Workexperience())
	}

	addEduExp() {
		this.user.resume.education_experience.push(new Educationexperience())
	}

	submit() {
		this.user.resume.candidateId = this.user._id;
		this.apiService.updateCandidate(this.user).then(u => {
			if (this.hasResume) {
				this.apiService.editResume(this.user.resume).then(d => {
					console.log(d)
					this.saveResume(d);
				});
			} else {
				this.apiService.addResume(this.user.resume).then(d => {
					this.saveResume(d);
				});
			}
		});
	}

	private saveResume(resume: Resume) {
		let cred = this.authService.credentials;
		this.apiService.getResumeByCandidateId(this.user._id).then(d => {
			if (d && d._id) {
				this.user.resume = d;
				cred.user = this.user;
				this.authService.setCredentials(cred);
				this.router.navigate(['/user', this.user._id]);
			}
		})

	}

	get hasResume() {
		const resume = this.authService.credentials.user.resume;
		return resume && resume._id;
	}
}

export class FileSnippet {
	constructor(public src: string, public file: File) {
	}
}