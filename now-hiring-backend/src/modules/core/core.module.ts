import { Module } from '@nestjs/common';
import { UploadFilesModule } from './upload-files/upload-files.module';

@Module({
  imports: [UploadFilesModule]
})
export class CoreModule {}
