import {ApiModelProperty} from '@nestjs/swagger';
import {Question} from "../models/Question.model";
import {Testcase} from "../models/Testcase.model";

export class DevTestDto {
    @ApiModelProperty()
    _id: string;
    @ApiModelProperty()
    title: string;
    @ApiModelProperty()
    description: string;
    @ApiModelProperty()
    programmingLanguage:string;
    @ApiModelProperty()
    statement:string;
    @ApiModelProperty({
        example: [{
            inputFile:"file.in",
            expectedOutputFile:"file.out",
            index:1
        }

        ]
    })
    testcases:[Testcase];
    @ApiModelProperty()
    jobOfferId: string;
}
