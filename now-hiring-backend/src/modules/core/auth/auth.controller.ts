import {Body, Controller, HttpException, HttpStatus, Post, Res} from '@nestjs/common';
import {CandidateSignupDto} from "./dto/candidate.signup.dto";
import {AuthService} from "./auth.service";
import {ApiUseTags} from '@nestjs/swagger'
import {AuthResponseObject} from "./dto/auth-response.model";
import {CandidateSigninDto} from "./dto/candidate.signin.model";
import {ErrorResponseObject} from "../models/error.response.model";
import {ResponseObject} from "../models/response.model";
import {USER_TYPE} from "../../user-profile/schemas/user.schema";
import {CompanySigninDto} from "./dto/company.signin.model";
import {CompanySignupDto} from "./dto/company.signup.dto";

@ApiUseTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){
    }

    @Post('candidate-signup')
    async candidate_signup(@Body() candidateSingupDto : CandidateSignupDto):Promise<AuthResponseObject>{
        if(await this.authService.candidateEmailExists(candidateSingupDto.email))
            throw new HttpException('Email already exists',HttpStatus.BAD_REQUEST);
        let newCandidate = await this.authService.candidateSingup(candidateSingupDto);
        return new AuthResponseObject(200,newCandidate,await this.authService.signUser(newCandidate),USER_TYPE.CANDIDATE);
    }

    @Post('candidate-signin')
    async candidate_signin(@Body() candidateSigninDto : CandidateSigninDto) : Promise<ResponseObject>{
        let result = await this.authService.candidateSignin(candidateSigninDto);
        if(result){
            return new AuthResponseObject(200,result,await this.authService.signUser(result),USER_TYPE.CANDIDATE)
        }else{
            return new ErrorResponseObject(403,"Wrong credentials");
        }
    }

    @Post('company-signup')
    async company_signup(@Body() companySingupDto : CompanySignupDto):Promise<AuthResponseObject>{
        if(await this.authService.companyEmailExists(companySingupDto.email))
            throw new HttpException('Email already exists',HttpStatus.BAD_REQUEST);
        let newCompany = await this.authService.companySingup(companySingupDto);
        return new AuthResponseObject(200,newCompany,await this.authService.signUser(newCompany),USER_TYPE.COMPANY);
    }

    @Post('company-signin')
    async company_signin(@Body() companySigninDto : CompanySigninDto) : Promise<ResponseObject>{
        let result = await this.authService.companySignin(companySigninDto);
        if(result){
            return new AuthResponseObject(200,result,await this.authService.signUser(result),USER_TYPE.COMPANY)
        }else{
            return new ErrorResponseObject(403,"Wrong credentials");
        }
    }
}
