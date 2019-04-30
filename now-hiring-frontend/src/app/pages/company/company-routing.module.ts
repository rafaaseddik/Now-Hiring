import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompanyProfileComponent} from "./company-profile/company-profile.component";
import {EditCompanyComponent} from "./edit-company/edit-company.component";
import {ListCompaniesComponent} from "./list-companies/list-companies.component";

const routes: Routes = [
    {
        path: '',
        component: ListCompaniesComponent
    },{
        path: 'edit',
        component: EditCompanyComponent
    }, {
        path: ':id',
        component: CompanyProfileComponent
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule {
}
