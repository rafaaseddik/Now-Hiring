import {HttpService, Inject, Injectable} from '@nestjs/common';
import {CodeRunnerDto} from "./dto/CodeRunner.dto";
import {PythonShell} from "python-shell";
import {Model} from "mongoose";
import {DevTest} from "../test/models/DevTest.model";
import * as fs from "fs";
import {CodeRunnerResult} from "./dto/CodeRunnerResult";
import {environment} from "../../../environment/environment";
import {ErrorType, TestcaseError} from "./dto/TestcaseError";
import {TestcaseSuccess} from "./dto/TestcaseSuccess";

@Injectable()
export class CodeRunnerService {

    constructor(@Inject('DEV_TEST_MODEL')
                private readonly devTestModel: Model<DevTest>,
                private readonly httpService: HttpService) {
    }

    public async dispatchCode(codeRunnerDto: CodeRunnerDto): Promise<CodeRunnerResult> {
        // Get the devTest from the database
        let devTest: DevTest = await this.devTestModel.findById(codeRunnerDto.devTestId);
        if(devTest.programmingLanguage=='Python'){
            return await this.executePythonCode(codeRunnerDto,devTest)
        }


    }

    public async executePythonCode(codeRunnerDto:CodeRunnerDto,devTest:DevTest):Promise<CodeRunnerResult> {
        let testcases = devTest.testcases;
        let result =[];
        let syntaxError = null;
        let filePath = await this.codeToFile(codeRunnerDto.code, codeRunnerDto.devTestId);
        console.log(filePath)
        // Verify syntax

        PythonShell.checkSyntaxFile(filePath).then(check => {
        }).catch(err => {
            console.log(err)
            syntaxError = new CodeRunnerResult([], true);
        });
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (syntaxError)
            return syntaxError;


        for (let testcase of testcases) {
            let inputFile = (await this.httpService.get(testcase.inputFile).toPromise()).data;
            let expectedOutputFile = (await this.httpService.get(testcase.expectedOutputFile).toPromise()).data;
            result.push(await this.executePythonTestcase(testcase.index,filePath,inputFile,expectedOutputFile));
        }
        return new CodeRunnerResult(result,false);
    }

    public async executePythonTestcase(testcaseIndex:number,filePath:string,input:string,expectedOutput:string):Promise<any>{
        var result = null;
        var shell = new PythonShell(filePath);
        var terminated = false;
        var output = [];
        var runtimeError = false;
        shell.on('message', (message) => {
            console.log(message);
            output.push(message);
        });
        shell.on('stderr', function (stderr) {
            console.log(stderr)
            runtimeError = true;
            shell.terminate();

        });
        shell.on('close', (message) => {
            terminated = true;
            return result;
        });


        for(let line of input.split('\n')){
            shell.send(line.replace('\r',''));
        }
        await new Promise(resolve =>{
            shell.on('close', (message) => {
                terminated = true;
                resolve(result);
            });
            setTimeout(resolve, 3000);
        });
        if(terminated){
            if(runtimeError)
                return new TestcaseError(testcaseIndex,ErrorType.RUNTIME_ERROR)
            else{
                console.log(output);
                console.log(expectedOutput.split('\n').map(v=>v.replace('\r','')))
                if(this.verifyOutput(output,expectedOutput.split('\n').map(v=>v.replace('\r',''))))
                    return new TestcaseSuccess(testcaseIndex);
                else
                    return new TestcaseError(testcaseIndex,ErrorType.WRONG_ANSWER)
            }
        }
        else
            return new TestcaseError(testcaseIndex,ErrorType.TIME_LIMIT_EXCEDED);
        console.log(result)

    }

    public verifyOutput(output,expectedOutput):boolean{
        if(output.length != expectedOutput.length)
            return false;
        else{
            var itemsEquality = output.map((value,key)=>{
                return value==expectedOutput[key]
            })
            console.log(itemsEquality)
            return itemsEquality.every(v=>v==true);
        }
    }
    public async codeToFile(code, devTestId): Promise<string> {

        let folder = await new Promise((resolve, reject) => {
            let result = environment.FS_CONFIG.TESTCASES_LOCATION + 'submissions\\' + devTestId + "\\";
            fs.mkdir(result,
                {recursive: true}, err => err ? reject(err) : resolve(result))
        });
        return await new Promise(((resolve, reject) => {
            var path = folder + Date.now().toString() + ".py"
            const writeStreamIn = fs.createWriteStream(path);
            writeStreamIn.write(code);
            writeStreamIn.end();
            resolve(path)
        }));
    }
}
