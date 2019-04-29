import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger'
import {ListAllEntitiesDto} from "../core/models/listAllEntities.dto";



@ApiUseTags('Knowledge-test')
@Controller('knowledge-test')
export class KnowledgeTestSubmissionController {
    /*
    constructor(private readonly knowledgeTestService:KnowledgeTestSubmissionService){
    }

    @Post()
    public async createKnowledgeTest(@Body() knowledgeTestDto:KnowledgeTestDto):Promise<KnowledgeTest>{
        return await this.knowledgeTestService.createKnowledgeTest(knowledgeTestDto);
    }

    @Get()
    public async getAll(@Query() query:ListAllEntitiesDto):Promise<Array<KnowledgeTest>>{
        return await this.knowledgeTestService.getAll(query.limit,query.page);
    }

    @Get(':jobOfferId')
    public async getByDevTestId(@Param('jobOfferId') jobOfferId: string){
        return await this.knowledgeTestService.getByDevTestId(jobOfferId);
    }

    @Put()
    public async updateKnowledgeTest(@Body()knowledgeTestDto:KnowledgeTestDto):Promise<KnowledgeTest>{
        return await this.knowledgeTestService.updateKnowledgeTest(knowledgeTestDto);
    }

    @Delete(':knowledgeTestId')
    public async deleteKnowledgeTest(@Param('knowledgeTestId') knowledgeTestId: string){
        return await this.knowledgeTestService.deleteKnowledgeTest(knowledgeTestId);
    }*/
}
