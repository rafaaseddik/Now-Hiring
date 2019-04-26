import { ApiModelProperty } from '@nestjs/swagger';


import {Schema} from "mongoose";

export class JobOfferDto {
    @ApiModelProperty()
    _id:string;
    @ApiModelProperty()
    title: string;
    @ApiModelProperty()
    description: string;
    @ApiModelProperty({example:"yyyy-mm-dd"})
    creationDate: Date;
    @ApiModelProperty({example:"yyyy-mm-dd"})
    expirationDate: Date;
    @ApiModelProperty({enum : ['FULL_TIME','PART_TIME','INTERNSHIP'],example:'FULL_TIME/PART_TIME/INTERNSHIP'})
    timePlan: string;
    @ApiModelProperty()
    minSalary: number;
    @ApiModelProperty()
    maxSalary: number;
    @ApiModelProperty({
        example:[
            {name:"HTML",level:4},
            {name:"MySQL",level:3},
        ]
    })
    skills: Array<{
        name:string,
        level:number
    }> = []
    @ApiModelProperty()
    companyId:string
}
