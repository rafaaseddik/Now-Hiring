import {ApiModelProperty} from '@nestjs/swagger';
import {Question} from "../models/Question.model";

export class KnowledgeTestDto {
    @ApiModelProperty()
    _id: string;
    @ApiModelProperty()
    title: string;
    @ApiModelProperty()
    description: string;
    @ApiModelProperty({
        example: [{
            statement: "string",
            possibleAnswers: ["string"],
            correctAnswers: ["string"]
        }

        ]
    })
    questions: [Question];
    @ApiModelProperty()
    jobOfferId: string;
}
