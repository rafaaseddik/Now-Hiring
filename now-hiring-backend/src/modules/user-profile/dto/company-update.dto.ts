import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import {Contact} from "../models/Contact.model";
import {Address} from "../models/Address.model";
export class CompanyUpdateDto{

    @ApiModelProperty()
    _id: string;
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
    @ApiModelProperty({
        example:{
            country: "",
            city: "",
            fullAddress: "",
            latitude: "",
            longitude: "",
        }
    })
    address:Address;


}
