import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
export class CompanySigninDto{
    @IsEmail()
    @ApiModelProperty()
    email: string;
    @ApiModelProperty()
    password: string;
}
