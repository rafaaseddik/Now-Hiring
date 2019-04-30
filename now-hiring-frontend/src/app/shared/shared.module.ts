import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BsDropdownModule} from "ngx-bootstrap";
import {ExperiencePipePipe} from "./pipes/experience-pipe.pipe";
import {JobGridItemComponent} from "./job-grid-item/job-grid-item.component";

const list = [HeaderComponent, FooterComponent, ExperiencePipePipe, JobGridItemComponent];

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		BsDropdownModule
	],
	declarations: list,
	exports: list,
	entryComponents: []
})
export class SharedModule {
}
