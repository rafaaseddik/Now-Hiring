import { ApiModelProperty } from '@nestjs/swagger';
export class AdvancedJobOfferSearchDto{

    @ApiModelProperty()
    query: string;
    @ApiModelProperty({
        isArray:true,
        example:['FULL_TIME','PART_TIME','INTERNSHIP']
    })
    timePlans;
    @ApiModelProperty()
    minSalary: number;
    @ApiModelProperty()
    maxSalary: number;
    @ApiModelProperty({
        example:
            {name:"HTML",minimumLevel:4}
    })
    skill: {
        name:string,
        minimumLevel:number
    };
}
