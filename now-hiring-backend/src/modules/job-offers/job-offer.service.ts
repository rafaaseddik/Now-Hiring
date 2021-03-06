import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {JwtService} from '@nestjs/jwt'
import {JobOffer} from "./models/JobOffer";
import {JobOfferDto} from "./dto/job-offer.dto";
import {AdvancedJobOfferSearchDto} from "./dto/advanced-job-offer-search.dto";


@Injectable()
export class JobOfferService {

    constructor(
        @Inject('JOB_OFFER_MODEL')
        private readonly jobOfferModel: Model<JobOffer>
    ) {
    }

    public async createJobOffer(jobOfferDto: JobOfferDto): Promise<JobOffer> {

        var newJobOffer = new this.jobOfferModel(jobOfferDto);
        return (await newJobOffer.save()).populate('company');
    }

    public async getAll(limit: number, page: number): Promise<Array<JobOffer>> {
        return await this.jobOfferModel.find().skip(limit * (page - 1)).limit(Number(limit)).populate('company  ');
    }

    public async search(advancedJobOfferSearch: AdvancedJobOfferSearchDto): Promise<Array<JobOffer>> {
        return await this.jobOfferModel.find({
            $and: [
                {$text: {$search: advancedJobOfferSearch.query}},
                {timePlan: {$in: advancedJobOfferSearch.timePlans}},
                {minSalary: {$gte: Math.max(0, advancedJobOfferSearch.minSalary)}},
                {maxSalary: {$lte: Math.min(Infinity, advancedJobOfferSearch.maxSalary)}},
                advancedJobOfferSearch.skill ? {
                    skills: {
                        $elemMatch: {
                            name: advancedJobOfferSearch.skill.name,
                            level: {$lte: advancedJobOfferSearch.skill.minimumLevel}
                        }
                    }
                } : {
                    skills: {
                        $elemMatch: {
                            level: {$gte: 0}
                        }
                    }
                }


            ]
        }).populate('company');
    }

    public async getByCompanyId(companyId: string): Promise<Array<JobOffer>> {
        return await this.jobOfferModel.find({company: companyId}).populate('company');
    }

    public async getById(jobId: string): Promise<JobOffer> {
        return await this.jobOfferModel.findById(jobId).populate('company');
    }

    public async updateJobOffer(jobOfferDto: JobOfferDto): Promise<JobOffer> {
        return await this.jobOfferModel.findByIdAndUpdate(jobOfferDto._id, jobOfferDto, {new: true}).populate('company');
    }

    public async deleteJobOffer(jobOfferId: string): Promise<JobOffer> {
        return await this.jobOfferModel.findOneAndDelete({_id: jobOfferId});
    }


}
