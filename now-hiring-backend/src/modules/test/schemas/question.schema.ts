import * as mongoose from 'mongoose';
import {Schema} from "mongoose";

export const QuestionSchema = new mongoose.Schema({
    statement: String,
    possibleAnswers: [String],
    correctAnswers: [String]
});
