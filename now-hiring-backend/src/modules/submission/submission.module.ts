import { Module } from '@nestjs/common';
import {KnowledgeTestSubmissionController} from "./knowledge-test-submission.controller";
import {DevTestSubmissionController} from "./dev-test-submission.controller";
import {KnowledgeTestSubmissionService} from "./knowledge-test-submission.service";
import {DevTestSubmissionService} from "./dev-test-submission.service";
import {DatabaseModule} from "../database/database.module";
import {testSubmissionProviders} from "./providers/test-submission.providers";

@Module({
    controllers:[KnowledgeTestSubmissionController,DevTestSubmissionController],
    providers:[...testSubmissionProviders,KnowledgeTestSubmissionService,DevTestSubmissionService],
    imports:[DatabaseModule]
})
export class SubmissionModule {}
