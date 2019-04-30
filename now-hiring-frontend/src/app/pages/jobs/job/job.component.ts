import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/User";
import {Job} from "../../../models/job";
import {QCMTest} from "../../../models/QCMTest";
import {DevTest} from "../../../models/DevTest";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../core/api-service.service";
import {AuthenticationService} from "../../../core";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  offerId = "";
  user: User;
  job: Job;
  knowledgeTests: QCMTest[] = [];
  devTests: DevTest[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, public authService: AuthenticationService) {
    this.offerId = this.route.snapshot.paramMap.get('id');
    this.apiService.getOfferById(this.offerId).then(d => {
      this.user = d.company;
      this.job = d;
    });
    this.apiService.getKnowledgeTestByJobId(this.offerId).then(d => {
      this.knowledgeTests = d;
    });
    this.apiService.getDevTestByJobId(this.offerId).then(d => {
      this.devTests = d;
    })
  }

  ngOnInit() {
  }

  get timePlan() {
    if (this.job) {
      switch (this.job.timePlan) {
        case 'FULL_TIME':
          return 'Full Time';
        case 'PART_TIME':
          return 'Part Time';
        case 'INTERNSHIP':
          return 'Internship';
      }
    }
    return '';
  }


  removeTest(test, index) {
    this.apiService.removeKnowledgeTestById(test._id).then(d => {
    });
    this.knowledgeTests.splice(index, 1);
  }

  removeDevTest(test,index){
    this.apiService.removeDevTestById(test._id).then(d => {
    });
    this.devTests.splice(index, 1);
  }

}
