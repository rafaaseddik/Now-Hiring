import * as mongoose from "mongoose";


export const TestcaseSchema = new mongoose.Schema({
    inputFile: String,
    expectedOutputFile: String,
    index: Number
});
