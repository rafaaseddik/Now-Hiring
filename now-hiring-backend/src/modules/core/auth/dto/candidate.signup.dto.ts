import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import {Contact} from "../../../user-profile/models/Contact.model";
import {Address} from "../../../user-profile/models/Address.model";
export class CandidateSignupDto{
    @IsEmail()
    @ApiModelProperty()
    email: string;
    @ApiModelProperty()
    password: string;
    @ApiModelProperty()
    fname: string;
    @ApiModelProperty()
    lname: string;
    @ApiModelProperty({
        example:"yyyy-mm-dd"
    })
    birthdate: Date;
    @ApiModelProperty()
    phoneNumber: string;
    @ApiModelProperty()
    imageUrl: string;
    @ApiModelProperty()
    about: string;
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
