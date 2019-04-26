import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {JwtService} from '@nestjs/jwt'
import {JobOffer} from "./models/JobOffer";
import {JobOfferDto} from "./dto/job-offer.dto";


@Injectable()
export class JobOfferService {

    constructor(
        @Inject('JOB_OFFER_MODEL')
        private readonly jobOfferModel: Model<JobOffer>

    ) {
    }
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
    }





}
