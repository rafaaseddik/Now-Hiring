import * as mongoose from 'mongoose';
import {Schema} from "mongoose";

const JobOfferSchema = new mongoose.Schema({
    title: String,
    description: String,
    creationDate: Date,
    expirationDate: Date,
    timePlan: {type:String,enum:['FULL_TIME','PART_TIME','INTERNSHIP']},
    minSalary: Number,
    maxSalary: Number,
    skills: [
        {
            name: String,
            level: Number
        }
    ],

    companyId: {type: Schema.Types.ObjectId, ref: "Company"}
});
JobOfferSchema.index({
    title:'text',
    description:'text',
});
export {JobOfferSchema}
