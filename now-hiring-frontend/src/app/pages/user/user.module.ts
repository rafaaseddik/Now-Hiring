import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ResumeComponent} from './resume/resume.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {BarRatingModule} from "ngx-bar-rating";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
	declarations: [UserProfileComponent, ResumeComponent],
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		BarRatingModule,
		UserRoutingModule
	],
	providers: [RxFormBuilder]
})
export class UserModule {
}
