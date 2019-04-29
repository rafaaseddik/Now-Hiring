import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {DevTestService} from "./dev-test.service";
import {ApiUseTags} from '@nestjs/swagger'
import {DevTestDto} from "./dto/dev-test.dto";
import {DevTest} from "./models/DevTest.model";
import {ListAllEntitiesDto} from "../core/models/listAllEntities.dto";

@ApiUseTags('Dev-test')
@Controller('dev-test')
export class DevTestController {
    constructor(private readonly devTestService:DevTestService){
    }

    @Post()
    public async createDevTest(@Body() devTestDto:DevTestDto):Promise<DevTest>{
        return await this.devTestService.createDevTest(devTestDto);
    }

    @Get()
    public async getAll(@Query() query:ListAllEntitiesDto):Promise<Array<DevTest>>{
        return await this.devTestService.getAll(query.limit,query.page);
    }

    @Get(':jobOfferId')
    public async getByJobOfferId(@Param('jobOfferId') jobOfferId: string){
        return await this.devTestService.getByJobOfferId(jobOfferId);
    }

    @Put()
    public async updateDevTest(@Body()devTestDto:DevTestDto):Promise<DevTest>{
        return await this.devTestService.updateDevTest(devTestDto);
    }

    @Delete(':devTestId')
    public async deleteDevTest(@Param('devTestId') devTestId: string){
        return await this.devTestService.deleteDevTest(devTestId);
    }
}
