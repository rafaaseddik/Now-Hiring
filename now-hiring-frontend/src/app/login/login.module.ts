import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {ReactiveFormsModule} from "@angular/forms";
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { RedirectComponent } from './redirect/redirect.component';

@NgModule({
    declarations: [SignInComponent, SignUpComponent, RedirectComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        SweetAlert2Module
    ],
    providers: [RxFormBuilder]
})
export class LoginModule {
}
