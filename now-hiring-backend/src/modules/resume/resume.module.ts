import { Module } from '@nestjs/common';
import {ResumeProviders} from "./providers/resume.providers";
import {ResumeService} from "./resume.service";
import {ResumeController} from "./resume.controller";
import {DatabaseModule} from "../database/database.module";

@Module({
    providers:[...ResumeProviders,ResumeService],
    controllers:[ResumeController],
    imports:[DatabaseModule]
})
export class ResumeModule {}
