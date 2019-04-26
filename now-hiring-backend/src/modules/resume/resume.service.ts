import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {JwtService} from '@nestjs/jwt'
import {Resume} from "./models/Resume";
import {ResumeDto} from "./dto/resume.dto";


@Injectable()
export class ResumeService {

    constructor(
        @Inject('RESUME_MODEL')
        private readonly resumeModel: Model<Resume>

    ) {
    }
    public async createResume(resumeDto:ResumeDto):Promise<Resume>{

        var newResume = new this.resumeModel(resumeDto);
        return await newResume.save();
    }
    public async getByCandidateId(candidateId:string):Promise<Resume>{
        return await this.resumeModel.findOne({candidateId:candidateId});
    }
    public async getAll(limit:number,page:number):Promise<Array<Resume>>{
        return await this.resumeModel.find().skip(limit*(page-1)).limit(Number(limit));
    }
    public async updateResume(resumeDto:ResumeDto):Promise<Resume>{
        return await this.resumeModel.findByIdAndUpdate(resumeDto._id,resumeDto,{new:true});
    }
    public async deleteResume(resumeId:string):Promise<Resume>{
        return await this.resumeModel.findOneAndDelete({_id:resumeId});
    }

    public async candidateHasResume(candidateId:string):Promise<boolean>{
        return await this.resumeModel.findOne({
            candidateId:candidateId
        }) != null;
    }



}
