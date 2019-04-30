import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompanyRoutingModule} from './company-routing.module';
import {CompanyProfileComponent} from './company-profile/company-profile.component';
import {EditCompanyComponent} from './edit-company/edit-company.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularEditorModule} from '@kolkov/angular-editor';
import {ListCompaniesComponent} from './list-companies/list-companies.component';
import {RxFormBuilder, RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {SharedModule} from "../../shared/shared.module";
import {OwlModule} from "ngx-owl-carousel";

@NgModule({
	declarations: [CompanyProfileComponent, EditCompanyComponent, ListCompaniesComponent],
	imports: [
		CommonModule,
		CompanyRoutingModule,
		AngularEditorModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		OwlModule
	], providers: [RxFormBuilder]
})
export class CompanyModule {
}
