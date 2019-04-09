import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import {Contact} from "../../../user-profile/models/Contact.model";
export class CompanySignupDto{
    @IsEmail()
    @ApiModelProperty()
    email: string;
    @ApiModelProperty()
    password: string;
    @ApiModelProperty()
    companyName: string;
    @ApiModelProperty()
    companyUrl: string;
    @ApiModelProperty()
    phoneNumbers: string;
    @ApiModelProperty()
    employeesNumber: string;
    @ApiModelProperty()
    description: string;
    @ApiModelProperty()
    speciality: string;
    @ApiModelProperty()
    foundationYear: number;
    @ApiModelProperty()
    about: string;
    @ApiModelProperty()
    logoUrl: string;
    @ApiModelProperty()
    ceoName: string;
    @ApiModelProperty({
        example:{
            facebookLink: "",
            linkedInLink: "",
            githubLink: "",
            stackoverflowLink: "",
            superUserLink: "",
            website: ""
        }
    })
    contact:Contact;
}
