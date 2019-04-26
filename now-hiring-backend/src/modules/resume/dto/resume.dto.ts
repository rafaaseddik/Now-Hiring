import { ApiModelProperty } from '@nestjs/swagger';
import {WorkExprienceDto} from "./experience/workExprience.dto";
import {EducationExperienceDto} from "./experience/educationExprience.dto";
import {PersonalProjectsExperienceDto} from "./experience/personalProjectsExprience.dto";
import {AddressSchema} from "../../user-profile/schemas/address.schema";
import {Schema} from "mongoose";

export class ResumeDto {
    @ApiModelProperty()
    _id:string;
    @ApiModelProperty()
    professionalTitle: string;
    @ApiModelProperty({
        example:[
            {
                startDate:"yyyy-mm-dd",
                endDate:"yyyy-mm-dd",
                description:"string",
                position:"string",
                address: {
                    country: "String",
                    city: "String",
                    fullAddress: "String",
                    latitude: "String",
                    longitude: "String",
                },
                companyName: "String",
                companyUrl:"String"}
            ]
    })
    work_experience: Array<WorkExprienceDto> = [];
    @ApiModelProperty({
        example:[
            {
                startDate:"yyyy-mm-dd",
                endDate:"yyyy-mm-dd",
                description:"string",
                position:"string",
                address: {
                    country: "String",
                    city: "String",
                    fullAddress: "String",
                    latitude: "String",
                    longitude: "String",
                },
                schoolName: "String",
            }
        ]
    })
    education_experience: Array<EducationExperienceDto> = [];
    @ApiModelProperty({
        example:[
            {
                startDate:"yyyy-mm-dd",
                endDate:"yyyy-mm-dd",
                description:"string",
                position:"string",
                projectName: "String",
                projectUrl:"String"}
        ]
    })
    personal_projects_experience: Array<PersonalProjectsExperienceDto> = [];
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
    candidateId:string
}
