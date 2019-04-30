import {Component, OnInit, ViewChild} from '@angular/core';
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {ApiService} from "../../core/api-service.service";
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";
import {AuthenticationService, UserTypes} from "../../core";
import {User} from "../../models/User";
import {Credentials} from "../../core/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    constructor(private formuilder: RxFormBuilder, private apiService: ApiService,
                private authService: AuthenticationService, private router: Router) {
    }

    @ViewChild('errorSwall') private errorSwal: SwalComponent;

    loginForm = this.formuilder.group({
        "email": "",
        "password": ""
    });

    signIn() {
        this.apiService.signIn(this.loginForm.value).then(d => {
            this.manageConnectedUser(d.data)
        }).catch(e => {
            this.errorSwal.show();
        });
    }

    ngOnInit() {
    }

    manageConnectedUser(data: Credentials) {
        this.authService.setCredentials(data, true);
        if (data.userType == UserTypes.CANDIDATE) {
            this.apiService.getResumeByCandidateId(data.user._id).then(d => {
                if (d && d._id) {
                    data.user.resume = d;
                    this.authService.setCredentials(data, true);
                }
                this.router.navigate(['/login/redirect']);
            })
        } else {
            this.router.navigate(['/login/redirect']);
        }
    }

}
