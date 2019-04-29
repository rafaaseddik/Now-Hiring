import {Document, Schema} from 'mongoose';
import { ApiModelProperty } from '@nestjs/swagger';
import {Candidate} from "../../user-profile/models/Candidate.model";
import {DevTest} from "../../test/models/DevTest.model";

export class DevTestSubmissionDto{
    @ApiModelProperty()
    _id:string;
    @ApiModelProperty()
    candidate:string;
    @ApiModelProperty()
    devTest:string;
    @ApiModelProperty()
    submissionCode:string;
    @ApiModelProperty()
    score:number;
}
