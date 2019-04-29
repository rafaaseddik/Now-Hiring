import { Module } from '@nestjs/common';
import { CodeRunnerController } from './code-runner.controller';
import { CodeRunnerService } from './code-runner.service';
import {DatabaseModule} from "../database/database.module";
import {TestModule} from "../test/testModule";

@Module({
  controllers: [CodeRunnerController],
  providers: [CodeRunnerService],
  imports:[DatabaseModule,TestModule]
})
export class CodeRunnerModule {}
