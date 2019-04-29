import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {DevTestSubmissionService} from "./dev-test-submission.service";
import {ApiUseTags} from '@nestjs/swagger'
import {DevTestSubmissionDto} from "./dto/DevTestSubmission.dto";
import {DevTestSubmission} from "./models/DevTestSubmission.model";
import {ListAllEntitiesDto} from "../core/models/listAllEntities.dto";

@ApiUseTags('Dev-test-submission')
@Controller('dev-test-submission')
export class DevTestSubmissionController {
    constructor(private readonly devTestSubmissionService:DevTestSubmissionService){
    }

    @Post()
    public async createDevTestSubmission(@Body() devTestSubmissionDto:DevTestSubmissionDto):Promise<DevTestSubmission>{
        return await this.devTestSubmissionService.createDevTestSubmission(devTestSubmissionDto);
    }

    @Get()
    public async getAll(@Query() query:ListAllEntitiesDto):Promise<Array<DevTestSubmission>>{
        return await this.devTestSubmissionService.getAll(query.limit,query.page);
    }

    @Get(':devTestId')
    public async getByDevTestId(@Param('devTestId') devTestId: string){
        return await this.devTestSubmissionService.getByDevTestId(devTestId);
    }

    @Put()
    public async updateDevTestSubmission(@Body()devTestSubmissionDto:DevTestSubmissionDto):Promise<DevTestSubmission>{
        return await this.devTestSubmissionService.updateDevTestSubmission(devTestSubmissionDto);
    }

    @Delete(':devTestSubmissionId')
    public async deleteDevTestSubmission(@Param('devTestSubmissionId') devTestSubmissionId: string){
        return await this.devTestSubmissionService.deleteDevTestSubmission(devTestSubmissionId);
    }
}
