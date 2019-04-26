import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {JwtService} from '@nestjs/jwt'
import {Candidate} from "../../user-profile/models/Candidate.model";
import {CandidateSignupDto} from "./dto/candidate.signup.dto";
import {CryptoService} from "../crypto/crypto.service";

import {User} from "../../user-profile/models/User.model";
import {Company} from "../../user-profile/models/Company.model";
import {CompanySignupDto} from "./dto/company.signup.dto";
import {UserSigninDto} from "./dto/user.signin.dto";


@Injectable()
export class AuthService {

    constructor(
        @Inject('CANDIDATE_MODEL')
        private readonly candidateModel: Model<Candidate>,
        @Inject('COMPANY_MODEL')
        private readonly companyModel: Model<Company>,
        private readonly cryptoService : CryptoService,
        private readonly jwtService: JwtService
    ) {
    }
    public async candidateSignin(candidateSigninDto:UserSigninDto):Promise<Candidate>{

        return await this.candidateModel.findOne({
            email:candidateSigninDto.email,
            password:this.cryptoService.hash(candidateSigninDto.password)
        });
    }
    public async candidateSingup(canditateDto: CandidateSignupDto): Promise<Candidate> {
        canditateDto.password = this.cryptoService.hash(canditateDto.password);

        const newCandidate = new this.candidateModel(canditateDto);
        return await newCandidate.save();
    }

    public async companySignin(companySigninDto:UserSigninDto):Promise<Company>{

        return await this.companyModel.findOne({
            email:companySigninDto.email,
            password:this.cryptoService.hash(companySigninDto.password)
        });
    }
    public async companySingup(companyDto: CompanySignupDto): Promise<Company> {
        companyDto.password = this.cryptoService.hash(companyDto.password);

        const newCompany = new this.companyModel(companyDto);
        return await newCompany.save();
    }

    public async candidateEmailExists(email: string): Promise<boolean> {
        var result = await this.candidateModel.findOne({email: email});
        return result!= null;
    }
    public async companyEmailExists(email: string): Promise<boolean> {
        var result = await this.companyModel.findOne({email: email});
        return result!= null;
    }

    public async signUser(user:User) : Promise<string>{
        return await this.jwtService.sign({id:user._id});
    }



}
