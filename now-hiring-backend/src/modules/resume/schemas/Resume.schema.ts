import * as mongoose from 'mongoose';


import {Schema} from "mongoose";
import {WorkExperienceSchema} from "./experience/WorkExprience.schema";
import {EducationExperienceSchema} from "./experience/EducationExprience.schema";
import {PersonalProjectsExperienceSchema} from "./experience/PersonalProjectsExprience.schema";

export const ResumeSchema = new mongoose.Schema({
    professionalTitle: String,
    skills:[
        {
            name:String,
            level:String
        }
    ],
    work_experience:[WorkExperienceSchema],
    education_experience:[EducationExperienceSchema],
    personal_projects_experience:[PersonalProjectsExperienceSchema],
    candidateId:{type:Schema.Types.ObjectId,ref:"Candidate"}

});

