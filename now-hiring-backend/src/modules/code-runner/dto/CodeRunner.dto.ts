import { ApiModelProperty } from '@nestjs/swagger';

export class CodeRunnerDto{
    @ApiModelProperty()
    code:string;
    @ApiModelProperty()
    devTestId:string;
    @ApiModelProperty()
    candidateId:string;
}
