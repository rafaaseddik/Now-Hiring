import { Module } from '@nestjs/common';
import {UploadFileController} from "./upload-file.controller";
import {UploadFileService} from "./upload-file.service";
import {CryptoModule} from "../crypto/crypto.module";

@Module({
    controllers:[UploadFileController],
    providers:[UploadFileService],
    imports:[
        CryptoModule
    ]
})
export class UploadFilesModule {}
