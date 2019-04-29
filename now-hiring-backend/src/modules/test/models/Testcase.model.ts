import { Document } from 'mongoose';
export interface Testcase extends Document{
    inputFile:string;
    expectedOutputFile:string;
    index:number;
}
