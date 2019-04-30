import {Component, OnInit, ViewChild} from '@angular/core';
import {RxFormBuilder} from "@rxweb/reactive-form-validators"
import {ApiService} from "../../core/api-service.service";
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {AuthenticationService} from "../../core";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    constructor(private formBuilder: RxFormBuilder, private apiService: ApiService,
                private authService: AuthenticationService, private router: Router) {
    }

    @ViewChild('errorSwal') private errorSwal: SwalComponent;

    createCompanyFormGroup = this.formBuilder.group({
        "email": "",
        "password": "",
        "companyName": "",
        "companyUrl": "",
        "phoneNumbers": "",
        "employeesNumber": "",
        "description": "",
        "speciality": "",
        "foundationYear": "",
        "about": "",
        "logoUrl": "",
        "ceoName": "",
        "contact": {
            "facebookLink": "",
            "linkedInLink": "",
            "githubLink": "",
            "stackoverflowLink": "",
            "superUserLink": "",
            "website": ""
        },
        "address": {
            "country": "",
            "city": "",
            "fullAddress": "",
            "latitude": "",
            "longitude": ""
        }
    });

    createCandidateFormGroup = this.formBuilder.group({
        "email": "",
        "password": "",
        "fname": "",
        "lname": "",
        "birthdate": "",
        "phoneNumber": "",
        "imageUrl": "",
        "about": "",
        "contact": {
            "facebookLink": "",
            "linkedInLink": "",
            "githubLink": "",
            "stackoverflowLink": "",
            "superUserLink": "",
            "website": ""
        },
        "address": {
            "country": "",
            "city": "",
            "fullAddress": "",
            "latitude": "",
            "longitude": ""
        }
    });

    type = 0;

    ngOnInit() {
    }

    public signUp() {
        if (this.type == 1) {
            console.log(this.createCandidateFormGroup.value);
            let body = this.createCandidateFormGroup.value;
            body.birthdate = body.birthdate.split('-').join('/');
            this.apiService.signUpCandidate(body).then(d => {
                this.manageSignUpRequest(d);
            }).catch(e => {
                this.manageError(e);
            });
        } else {
            this.apiService.signUpCompany(this.createCompanyFormGroup.value).then(d => {
                this.manageSignUpRequest(d);
            }).catch(e => {
                this.manageError(e);
            });
        }
    }

    manageSignUpRequest(result) {
        if (result.status == 200) {
            this.authService.setCredentials(result.data, true);
            this.router.navigate(['/login/redirect']);
        } else {
            this.manageError(result);
        }
    }

    manageError(result) {
        this.errorSwal.show();
    }

}
