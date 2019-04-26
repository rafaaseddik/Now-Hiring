import { Module } from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UserProfileModule} from "../../user-profile/user-profile.module";
import {environment} from "../../../../environment/environment";
import {CryptoModule} from "../crypto/crypto.module";
import {ResumeModule} from "../../resume/resume.module";

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports :[
      UserProfileModule,
      ResumeModule,
      JwtModule.register({ secretOrPrivateKey: environment.secret_key }),
      CryptoModule
  ]
})
export class AuthModule {}
