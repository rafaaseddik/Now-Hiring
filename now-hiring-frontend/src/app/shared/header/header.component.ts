import {Component, OnInit} from '@angular/core';
import {AuthenticationService, UserTypes} from "../../core";
import {Router} from "@angular/router";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(public authService: AuthenticationService, private router: Router) {
	}

	ngOnInit() {
	}

	company_menu = [
		{
			name: "Home",
			icon: "fa-home",
			link: "/"
		},
		{
			name: "Faq",
			icon: "fa-building",
			link: "/faq"
		},
		{
			name: "Companies",
			icon: "fa-users",
			link: "/company"
		},
		{
			name: "Add job",
			icon: "fa-plus",
			link: "/jobs/add"
		},
		{
			name: "Your jobs",
			icon: "fa-briefcase",
			link: "/jobs/company"
		},
		{
			name: "Contact us",
			icon: "fa-question-circle",
			link: "/contact"
		}
	];

	candidate_menu = [
		{
			name: "Home",
			icon: "fa-home",
			link: "/"
		},
		{
			name: "Faq",
			icon: "fa-building",
			link: "/faq"
		},
		{
			name: "Companies",
			icon: "fa-users",
			link: "/company"
		},
		{
			name: "Jobs",
			icon: "fa-briefcase",
			link: "/jobs"
		},
		{
			name: "Contact us",
			icon: "fa-question-circle",
			link: "/contact"
		}
	];

	not_connected_menu = [
		{
			name: "Home",
			icon: "fa-home",
			link: "/"
		},
		{
			name: "Faq",
			icon: "fa-building",
			link: "/faq"
		},
		{
			name: "Companies",
			icon: "fa-users",
			link: "/company"
		},
		{
			name: "Jobs",
			icon: "fa-briefcase",
			link: "/jobs"
		},
		{
			name: "Contact us",
			icon: "fa-question-circle",
			link: "/contact"
		}
	];

	logout() {
		this.authService.logout();
		this.router.navigate(['login']);
	}

	goProfile() {
		if (this.authService.credentials.userType == UserTypes.COMPANY) {
			this.router.navigate(['/company', this.authService.credentials.user._id]);
		} else {
			this.router.navigate(['/user', this.authService.credentials.user._id]);
		}
	}

	get menu() {
		if (this.authService.isAuthenticated()) {
			return this.authService.credentials.userType == UserTypes.CANDIDATE ? this.candidate_menu : this.company_menu;
		} else {
			return this.not_connected_menu;
		}
	}

}
