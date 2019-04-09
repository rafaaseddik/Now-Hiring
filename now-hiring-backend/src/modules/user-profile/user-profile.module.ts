import { Module } from '@nestjs/common';
import {userProfileProviders} from './providers/user-profile.providers';
import {DatabaseModule} from "../database/database.module";

@Module({
    providers: [...userProfileProviders],
    exports: [...userProfileProviders],
    imports:[DatabaseModule]
})
export class UserProfileModule {}
