import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {JwtService} from '@nestjs/jwt'
import {Company} from "./models/Company.model";
import {Candidate} from "./models/Candidate.model";
import {CompanyUpdateDto} from "./dto/company-update.dto";
import {CandidateUpdateDto} from "./dto/candidate-update.dto";
//import {JobOfferDto} from "./dto/job-offer.dto";


@Injectable()
export class UserProfileService {

    constructor(
        @Inject('CANDIDATE_MODEL')
        private readonly candidateModel: Model<Candidate>,
        @Inject('COMPANY_MODEL')
        private readonly companyModel: Model<Company>

    ) {
    }

    public async getAllCompanies(limit:number,page:number):Promise<Array<Company>>{
        return await this.companyModel.find().skip(limit*(page-1)).limit(Number(limit));
    }
    public async updateCompany(companyUpdateDto:CompanyUpdateDto):Promise<Company>{
        return await this.companyModel.findByIdAndUpdate(companyUpdateDto._id,companyUpdateDto,{new:true});
    }
    public async getAllCandidates(limit:number,page:number):Promise<Array<Candidate>>{
        return await this.candidateModel.find().skip(limit*(page-1)).limit(Number(limit));
    }
    public async updateCandidate(candidateUpdateDto:CandidateUpdateDto):Promise<Candidate>{
        return await this.candidateModel.findByIdAndUpdate(candidateUpdateDto._id,candidateUpdateDto,{new:true});
    }
    /*
    public async createJobOffer(jobOfferDto:JobOfferDto):Promise<JobOffer>{

        var newJobOffer = new this.jobOfferModel(jobOfferDto);
        return await newJobOffer.save();
    }
    public async getAll(limit:number,page:number):Promise<Array<JobOffer>>{
        return await this.jobOfferModel.find().skip(limit*(page-1)).limit(Number(limit));
    }
    public async updateJobOffer(jobOfferDto:JobOfferDto):Promise<JobOffer>{
        return await this.jobOfferModel.findByIdAndUpdate(jobOfferDto._id,jobOfferDto,{new:true});
    }
    public async deleteJobOffer(jobOfferId:string):Promise<JobOffer>{
        return await this.jobOfferModel.findOneAndDelete({_id:jobOfferId});
    }*/





}
