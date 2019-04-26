import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res} from '@nestjs/common';
import {ResumeService} from "./resume.service";
import {ApiUseTags} from '@nestjs/swagger'
import {Resume} from "./models/Resume";
import {ResumeDto} from "./dto/resume.dto";
import {ListAllEntitiesDto} from "../core/models/listAllEntities.dto";


@ApiUseTags('Resume')
@Controller('resume')
export class ResumeController {

    constructor(private readonly resumeService:ResumeService){
    }

    @Post()
    public async createResume(@Body()resumeDto:ResumeDto):Promise<Resume>{
        if(await this.resumeService.candidateHasResume(resumeDto.candidateId))
            throw new HttpException('Candidate has already a resume',HttpStatus.BAD_REQUEST);
        return await this.resumeService.createResume(resumeDto);
    }

    @Get(':candidateId')
    public async getByCandidateId(@Param('candidateId') candidateId: string):Promise<Resume>{
        return await this.resumeService.getByCandidateId(candidateId);
    }

    @Get()
    public async getAll(@Query() query:ListAllEntitiesDto):Promise<Array<Resume>>{
        return await this.resumeService.getAll(query.limit,query.page);
    }

    @Put()
    public async updateResume(@Body()resumeDto:ResumeDto):Promise<Resume>{
        return await this.resumeService.updateResume(resumeDto);
    }

    @Delete(':resumeId')
    public async deleteResume(@Param('resumeId') resumeId: string){
        console.log(resumeId)
        return await this.resumeService.deleteResume(resumeId);
    }

}
