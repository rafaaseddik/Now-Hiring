import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/api-service.service";
import {AuthenticationService} from "../../../core";
import {Job} from "../../../models/job";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  listJobs: Job[] = [];

  constructor(private apiService : ApiService, private authSerivce : AuthenticationService) {
    this.apiService.getJobsByCompanyId(this.authSerivce.credentials.user._id).then(d => {
      this.listJobs = d;
    })
  }

  ngOnInit() {
  }

}
