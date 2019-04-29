import {Inject, Injectable} from '@nestjs/common';
import {Model} from "mongoose";
import {DevTestSubmission} from "./models/DevTestSubmission.model";
import {DevTestSubmissionDto} from "./dto/DevTestSubmission.dto";





@Injectable()
export class DevTestSubmissionService {

    constructor(@Inject('DEV_TEST_SUBMISSION_MODEL')
                private readonly devTestSubmissionModel: Model<DevTestSubmission>){
    }

    public async createDevTestSubmission(devTestSubmissionDto: DevTestSubmissionDto): Promise<DevTestSubmission> {
        var newDevTestSubmission = new this.devTestSubmissionModel(devTestSubmissionDto);
        return (await newDevTestSubmission.save());
    }

    public async getAll(limit: number, page: number): Promise<Array<DevTestSubmission>> {
        return await this.devTestSubmissionModel.find().skip(limit * (page - 1)).limit(Number(limit));
    }
    public async getByDevTestId(devTestId:string): Promise<Array<DevTestSubmission>> {
        return await this.devTestSubmissionModel.find({devTest:devTestId}).populate('candidate').populate('devTest');
    }

    public async updateDevTestSubmission(devTestSubmissionDto: DevTestSubmissionDto): Promise<DevTestSubmission> {
        return await this.devTestSubmissionModel.findByIdAndUpdate(devTestSubmissionDto._id, devTestSubmissionDto, {new: true});
    }

    public async deleteDevTestSubmission(devTestSubmissionId: string): Promise<DevTestSubmission> {
        return await this.devTestSubmissionModel.findOneAndDelete({_id: devTestSubmissionId});
    }

}
