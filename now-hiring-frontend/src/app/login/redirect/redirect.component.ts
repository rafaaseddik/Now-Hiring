import {Component, OnInit} from '@angular/core';
import {AuthenticationService, UserTypes} from "../../core";
import {Router} from "@angular/router";

@Component({
    templateUrl: './redirect.component.html'
})
export class RedirectComponent implements OnInit {

    constructor(private authService: AuthenticationService, private router: Router) {
        if (authService.credentials.userType == UserTypes.CANDIDATE && !authService.credentials.user.resume) {
            this.router.navigate(['/user/resume']);
        } else if (authService.credentials.userType == UserTypes.COMPANY
            && (!authService.credentials.user.contact.facebookLink || !authService.credentials.user.address.country)) {
            this.router.navigate(['/company/edit']);
        } else {
            this.router.navigate(['/']);

        }
    }

    ngOnInit() {
    }

}
