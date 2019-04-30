import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {JobsRoutingModule} from './jobs-routing.module';
import {JobsComponent} from '../jobs/jobs.component';
import {DetailsJobComponent} from './details-job/details-job.component';
import {JobItemComponent} from './job-item/job-item.component';
import {ApplyJobComponent} from './apply-job/apply-job.component';
import {AddJobComponent} from './add-job/add-job.component';
import {FormsModule} from "@angular/forms";
import {BarRatingModule} from "ngx-bar-rating";
import {AddQCMComponent} from './add-qcm/add-qcm.component';
import {AddDevTestComponent} from './add-dev-test/add-dev-test.component';
import {AngularEditorModule} from "@kolkov/angular-editor";
import {JobComponent} from './job/job.component';
import {JobGridItemComponent} from '../../shared/job-grid-item/job-grid-item.component';
import {CompanyComponent} from './company/company.component';
import {SharedModule} from "../../shared/shared.module";
import {Ng5SliderModule} from "ng5-slider";
import { ApplyDevTestComponent } from './apply-dev-test/apply-dev-test.component';
import { ApplyQcmTestComponent } from './apply-qcm-test/apply-qcm-test.component';

@NgModule({
	declarations: [JobsComponent, DetailsJobComponent, JobItemComponent, ApplyJobComponent, AddJobComponent, AddQCMComponent, AddDevTestComponent, JobComponent, CompanyComponent, ApplyDevTestComponent, ApplyQcmTestComponent],
	imports: [
		CommonModule,
		JobsRoutingModule,
		FormsModule,
		BarRatingModule,
		AngularEditorModule,
		SharedModule,
		Ng5SliderModule
	]
})
export class JobsModule {
}
