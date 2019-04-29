import {
    Controller,
    Param,
    Post,
    UploadedFile,
    UploadedFiles,
    UseInterceptors
} from '@nestjs/common';

import {ApiUseTags, ApiConsumes, ApiImplicitFile} from '@nestjs/swagger'
import {FileFieldsInterceptor, FileInterceptor} from "@nestjs/platform-express";
import {environment} from "../../../../environment/environment";
import * as fs from "fs";
import {UploadFileService} from "./upload-file.service";
import {CryptoService} from "../crypto/crypto.service";


@ApiUseTags('UploadFile')
@Controller('upload-file')
export class UploadFileController {

    constructor(private readonly uploadFileService: UploadFileService, private readonly cryptoService: CryptoService) {

    }

    @Post('upload-testcase/:folderHash/:isFirstTestcase')
    @ApiConsumes('multipart/form-data')
    @ApiImplicitFile({name: 'outputFile', required: true, description: 'Output file'})
    @ApiImplicitFile({name: 'inputFile', required: true, description: 'Input file'})
    @UseInterceptors(FileFieldsInterceptor([
        {name: "outputFile"},
        {name: "inputFile"}
    ]))
    public async uploadTestcaseFile(@UploadedFiles() files, @Param('folderHash') folderHash: string, @Param('isFirstTestcase') isFirstTestcase: number) {
        var folderHash = folderHash;

        if (isFirstTestcase == 1) {
            folderHash = this.cryptoService.generateId(30);
        }
        const testCaseIndex = await this.uploadFileService.createTestCaseDir(folderHash);
        const relativePath = folderHash + "\\" + testCaseIndex + "\\";
        const inputRelativePath = relativePath + "input.in";
        const outputRelativePath = relativePath + "output.in";
        const inputFsPath = environment.FS_CONFIG.TESTCASES_LOCATION + inputRelativePath;
        const outputFsPath = environment.FS_CONFIG.TESTCASES_LOCATION + outputRelativePath;
        const inputHttpPath = environment.FS_CONFIG.HTTP_TESTCASES_LOCATION+ inputRelativePath;
        const outputHttpPath = environment.FS_CONFIG.HTTP_TESTCASES_LOCATION + outputRelativePath;


        await Promise.all([
            new Promise(((resolve, reject) => {
                const writeStreamIn = fs.createWriteStream(inputFsPath);
                writeStreamIn.write(files.inputFile[0].buffer);
                writeStreamIn.end();
                resolve(true)
            })),
            new Promise(((resolve, reject) => {
                const writeStreamOut = fs.createWriteStream(outputFsPath);
                writeStreamOut.write(files.outputFile[0].buffer);
                writeStreamOut.end();
                resolve(true)
            }))
        ]);
        return {
            folderHash: folderHash,
            testcase: {
                index: parseInt(testCaseIndex),
                inputFile: inputHttpPath,
                expectedOutputFile: outputHttpPath
            }
        };
    }
    @Post('upload-avatar')
    @ApiConsumes('multipart/form-data')
    @ApiImplicitFile({name: 'avatarFile', required: true, description: 'Avatar file'})
    @UseInterceptors(FileInterceptor('avatarFile'))
    public async uploadAvatarFile(@UploadedFile() file) {

        var hash = this.cryptoService.generateId(30);

        const avatarFsPath = environment.FS_CONFIG.AVATAR_LOCATION + hash+file.originalname;
        const avatarHttpPath = environment.FS_CONFIG.HTTP_AVATAR_LOCATION+hash+ file.originalname;

            await new Promise(((resolve, reject) => {
                const writeStreamIn = fs.createWriteStream(avatarFsPath);
                writeStreamIn.write(file.buffer);
                writeStreamIn.end();
                resolve(true)
            }));

        return {
            url: avatarHttpPath
        };
    }
}
