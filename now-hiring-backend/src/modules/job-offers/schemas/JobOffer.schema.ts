import * as mongoose from 'mongoose';
import {Schema} from "mongoose";

const JobOfferSchema = new mongoose.Schema({
    title: String,
    description: String,
    creationDate: {type:Date,default:Date.now()},
    expirationDate: {type:Date,default:new Date("2030-12-31")},
    timePlan: {type:String,enum:['FULL_TIME','PART_TIME','INTERNSHIP']},
    minSalary: Number,
    maxSalary: Number,
    skills: [
        {
            name: String,
            level: Number
        }
    ],

    company: {type: Schema.Types.ObjectId, ref: "Company"}
});
JobOfferSchema.index({
    title:'text',
    description:'text',
});
export {JobOfferSchema}
