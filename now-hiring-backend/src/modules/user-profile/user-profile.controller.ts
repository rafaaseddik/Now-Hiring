import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res} from '@nestjs/common';
import {UserProfileService} from "./user-profile.service";
import {ApiUseTags} from '@nestjs/swagger'
import {Company} from "./models/Company.model";
import {Candidate} from "./models/Candidate.model";
//import {JobOfferDto} from "./dto/job-offer.dto";
import {ListAllEntitiesDto} from "../core/models/listAllEntities.dto";
import {CompanyUpdateDto} from "./dto/company-update.dto";
import {CandidateUpdateDto} from "./dto/candidate-update.dto";


@ApiUseTags('UserProfile')
@Controller('userProfile')
export class UserProfileController {

    constructor(private readonly userProfileService:UserProfileService){
    }

    @Get('company')
    public async getAllCompanies(@Query() query:ListAllEntitiesDto):Promise<Array<Company>>{
        return await this.userProfileService.getAllCompanies(query.limit,query.page);
    }
    @Put('company')
    public async updateCompany(@Body()companyUpdateDto:CompanyUpdateDto):Promise<Company>{
        return await this.userProfileService.updateCompany(companyUpdateDto);
    }

    @Get('candidate')
    public async getAllCandidates(@Query() query:ListAllEntitiesDto):Promise<Array<Candidate>>{
        return await this.userProfileService.getAllCandidates(query.limit,query.page);
    }
    @Put('candidate')
    public async updateCandidate(@Body()candidateUpdateDto:CandidateUpdateDto):Promise<Candidate>{
        return await this.userProfileService.updateCandidate(candidateUpdateDto);
    }

/*
    @Post()
    public async createJobOffer(@Body() jobOfferDto:JobOfferDto):Promise<JobOffer>{
        return await this.jobOfferService.createJobOffer(jobOfferDto);
    }

    @Get()
    public async getAll(@Query() query:ListAllEntitiesDto):Promise<Array<JobOffer>>{
        return await this.jobOfferService.getAll(query.limit,query.page);
    }

    @Put()
    public async updateJobOffer(@Body()jobOfferDto:JobOfferDto):Promise<JobOffer>{
        return await this.jobOfferService.updateJobOffer(jobOfferDto);
    }

    @Delete(':jobOfferId')
    public async deleteJobOffer(@Param('jobOfferId') jobOfferId: string){
        console.log(jobOfferId)
        return await this.jobOfferService.deleteJobOffer(jobOfferId);
    }
*/
}
