import {Document, Schema} from 'mongoose';
import {Candidate} from "../../user-profile/models/Candidate.model";
import {DevTest} from "../../test/models/DevTest.model";
export interface DevTestSubmission extends Document{
    candidate:Candidate;
    devTest:DevTest;
    submissionCode:string;
    score:number;
}
