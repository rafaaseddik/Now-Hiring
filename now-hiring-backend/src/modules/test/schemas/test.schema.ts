import * as mongoose from 'mongoose';
import {Schema} from "mongoose";
import {QuestionSchema} from "./question.schema";
import {TestcaseSchema} from "./testcase.schema";

const KnowledgeTestSchema = new mongoose.Schema({
    title:String,
    description:String,
    publishDate:{type:Date,default:Date.now()},
    questions:[QuestionSchema],
    jobOfferId: {type: Schema.Types.ObjectId, ref: "JobOffer"}
});

const DevTestSchema = new mongoose.Schema({
    title:String,
    description:String,
    publishDate:{type:Date,default:Date.now()},
    programmingLanguage:String,
    statement:String,
    testcases:[TestcaseSchema],
    jobOfferId: {type: Schema.Types.ObjectId, ref: "JobOffer"}
});

export {KnowledgeTestSchema,DevTestSchema}
