import * as mongoose from 'mongoose';


import {Schema} from "mongoose";

const DevTestSubmissionSchema = new mongoose.Schema({
    candidate:{type:Schema.Types.ObjectId,ref:"Candidate"},
    devTest:{type:Schema.Types.ObjectId,ref:"DevTest"},
    submissionCode:String,
    score:Number
});

// TODO
const KnowledgeTestSubmissionSchema = new mongoose.Schema({
    candidate:{type:Schema.Types.ObjectId,ref:"Candidate"},
    devTestt:{type:Schema.Types.ObjectId,ref:"DevTest"},
    submissionCode:String,
    score:Number
});


export {DevTestSubmissionSchema,KnowledgeTestSubmissionSchema}
