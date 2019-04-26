import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res} from '@nestjs/common';
import {JobOfferService} from "./job-offer.service";
import {ApiUseTags} from '@nestjs/swagger'
import {JobOffer} from "./models/JobOffer";
import {JobOfferDto} from "./dto/job-offer.dto";
import {ListAllEntitiesDto} from "../core/models/listAllEntities.dto";


@ApiUseTags('JobOffer')
@Controller('jobOffer')
export class JobOfferController {

    constructor(private readonly jobOfferService:JobOfferService){
    }

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

}
