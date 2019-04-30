import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {ResumeComponent} from "./resume/resume.component";

const routes: Routes = [
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: ':id',
        component: UserProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
