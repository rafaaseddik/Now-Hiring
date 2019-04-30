import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JobsComponent} from './jobs.component';
import {DetailsJobComponent} from './details-job/details-job.component';
import {ApplyJobComponent} from "./apply-job/apply-job.component";
import {AddJobComponent} from "./add-job/add-job.component";
import {AddQCMComponent} from "./add-qcm/add-qcm.component";
import {AddDevTestComponent} from "./add-dev-test/add-dev-test.component";
import {JobComponent} from "./job/job.component";
import {CompanyComponent} from "./company/company.component";
import {ApplyQcmTestComponent} from "./apply-qcm-test/apply-qcm-test.component";
import {ApplyDevTestComponent} from "./apply-dev-test/apply-dev-test.component";

const routes: Routes = [
	{
		path: '',
		component: JobsComponent
	}, {
		path: 'add',
		component: AddJobComponent
	}, {
		path: 'company',
		component: CompanyComponent
	}, {
		path: ':id',
		component: JobComponent,
		children: [
			{
				path: '',
				component: DetailsJobComponent
			},
			{
				path: 'apply',
				component: ApplyJobComponent
			}, {
				path: 'qcm/add',
				component: AddQCMComponent
			}, {
				path: 'dev/add',
				component: AddDevTestComponent
			},
			{
				path: 'apply/qcm/:testId',
				component: ApplyQcmTestComponent
			},
			{
				path: 'apply/dev/:testId',
				component: ApplyDevTestComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class JobsRoutingModule {
}
