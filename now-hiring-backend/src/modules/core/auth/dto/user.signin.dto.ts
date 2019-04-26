import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
export class UserSigninDto{
    @IsEmail()
    @ApiModelProperty()
    email: string;
    @ApiModelProperty()
    password: string;
}
