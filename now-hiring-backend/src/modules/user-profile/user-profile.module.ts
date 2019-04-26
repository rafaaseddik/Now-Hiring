import { Module } from '@nestjs/common';
import {userProfileProviders} from './providers/user-profile.providers';
import {DatabaseModule} from "../database/database.module";
import {UserProfileService} from "./user-profile.service";
import {UserProfileController} from "./user-profile.controller";

@Module({
    providers: [...userProfileProviders,UserProfileService],
    exports: [...userProfileProviders],
    controllers:[UserProfileController],
    imports:[DatabaseModule]
})
export class UserProfileModule {}
