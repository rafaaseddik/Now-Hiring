import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import * as fs from "fs";
import {environment} from "../../../../environment/environment";



@Injectable()
export class UploadFileService {

    constructor(

    ) {
    }

    public async createTestCaseDir(devTestId:string){
        var folderId = (Math.floor(Math.random()*100000)).toString();
        let result = undefined;
        await new Promise((resolve, reject) => {
            result = environment.FS_CONFIG.TESTCASES_LOCATION+devTestId+"\\"+folderId+"\\"
            fs.mkdir(result,
                { recursive: true }, err => err ? reject(err) : resolve())
        });
        return folderId;
    }
}
