import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger'
import {ListAllEntitiesDto} from "../core/models/listAllEntities.dto";
import {KnowledgeTestService} from "./knowledge-test.service";
import {KnowledgeTestDto} from "./dto/knowledge-test.dto";
import {KnowledgeTest} from "./models/KnowledgeTest.model";

@ApiUseTags('Knowledge-test')
@Controller('knowledge-test')
export class KnowledgeTestController {
    constructor(private readonly knowledgeTestService:KnowledgeTestService){
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
    public async getByJobOfferId(@Param('jobOfferId') jobOfferId: string){
        return await this.knowledgeTestService.getByJobOfferId(jobOfferId);
    }

    @Put()
    public async updateKnowledgeTest(@Body()knowledgeTestDto:KnowledgeTestDto):Promise<KnowledgeTest>{
        return await this.knowledgeTestService.updateKnowledgeTest(knowledgeTestDto);
    }

    @Delete(':knowledgeTestId')
    public async deleteKnowledgeTest(@Param('knowledgeTestId') knowledgeTestId: string){
        return await this.knowledgeTestService.deleteKnowledgeTest(knowledgeTestId);
    }
}
