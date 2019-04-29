import { Document } from 'mongoose';
export interface Question extends Document{
    statement:string;
    possibleAnswers : [string];
    correctAnswers : [string]
}
