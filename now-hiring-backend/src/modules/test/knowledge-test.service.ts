import {Inject, Injectable} from '@nestjs/common';
import {Model} from "mongoose";
import {KnowledgeTest} from "./models/KnowledgeTest.model";
import {KnowledgeTestDto} from "./dto/knowledge-test.dto";





@Injectable()
export class KnowledgeTestService {

    constructor(@Inject('KNOWLEDGE_TEST_MODEL')
                private readonly knowledgeTestModel: Model<KnowledgeTest>){
    }

    public async createKnowledgeTest(knowledgeTestDto: KnowledgeTestDto): Promise<KnowledgeTest> {

        var newKnowledgeTest = new this.knowledgeTestModel(knowledgeTestDto);
        return (await newKnowledgeTest.save());
    }

    public async getAll(limit: number, page: number): Promise<Array<KnowledgeTest>> {
        return await this.knowledgeTestModel.find().skip(limit * (page - 1)).limit(Number(limit));
    }
    public async getByJobOfferId(jobOfferId): Promise<Array<KnowledgeTest>> {
        return await this.knowledgeTestModel.find({jobOfferId:jobOfferId});
    }

    public async updateKnowledgeTest(knowledgeTestDto: KnowledgeTestDto): Promise<KnowledgeTest> {
        return await this.knowledgeTestModel.findByIdAndUpdate(knowledgeTestDto._id, knowledgeTestDto, {new: true});
    }

    public async deleteKnowledgeTest(knowledgeTestId: string): Promise<KnowledgeTest> {
        return await this.knowledgeTestModel.findOneAndDelete({_id: knowledgeTestId});
    }

}
