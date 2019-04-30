import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule',
      },
      {
        path: 'jobs',
        loadChildren: './jobs/jobs.module#JobsModule',
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
      },
      {
        path: 'company',
        loadChildren: './company/company.module#CompanyModule',
      },
      {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule',
      },
      {
        path: 'faq',
        loadChildren: './faq/faq.module#FaqModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
