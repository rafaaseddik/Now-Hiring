import {Inject, Injectable} from '@nestjs/common';
import {Model} from "mongoose";
import {DevTest} from "./models/DevTest.model";
import {DevTestDto} from "./dto/dev-test.dto";





@Injectable()
export class DevTestService {

    constructor(@Inject('DEV_TEST_MODEL')
                private readonly devTestModel: Model<DevTest>){
    }

    public async createDevTest(devTestDto: DevTestDto): Promise<DevTest> {

        var newDevTest = new this.devTestModel(devTestDto);
        return (await newDevTest.save());
    }

    public async getAll(limit: number, page: number): Promise<Array<DevTest>> {
        return await this.devTestModel.find().skip(limit * (page - 1)).limit(Number(limit));
    }
    public async getByJobOfferId(jobOfferId): Promise<Array<DevTest>> {
        return await this.devTestModel.find({jobOfferId:jobOfferId});
    }

    public async updateDevTest(devTestDto: DevTestDto): Promise<DevTest> {
        return await this.devTestModel.findByIdAndUpdate(devTestDto._id, devTestDto, {new: true});
    }

    public async deleteDevTest(devTestId: string): Promise<DevTest> {
        return await this.devTestModel.findOneAndDelete({_id: devTestId});
    }

}
