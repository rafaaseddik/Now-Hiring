import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {environment} from '../environment/environment';
import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/core/auth/auth.module';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { JobModule } from './modules/jobs/jobModule';
import { TestModule } from './modules/test/testModule';
import { SubmissionModule } from './modules/submission/submission.module';
import { ResumeModule } from './modules/resume/resume.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.DB.connectionString),
    CoreModule,
    AuthModule,
    UserProfileModule,
    JobModule,
    TestModule,
    SubmissionModule,
    ResumeModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
