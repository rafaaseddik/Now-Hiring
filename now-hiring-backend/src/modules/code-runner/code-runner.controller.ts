import {Body, Controller, Post} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger'
import {CodeRunnerDto} from "./dto/CodeRunner.dto";
import {CodeRunnerService} from "./code-runner.service";
import {CodeRunnerResult} from "./dto/CodeRunnerResult";


@ApiUseTags('Code-runner')
@Controller('code-runner')
export class CodeRunnerController {

    constructor(private readonly codeRunnerService:CodeRunnerService){}
    @Post()
    public async runCode(@Body()codeRunnerDto : CodeRunnerDto):Promise<CodeRunnerResult>{
        return await this.codeRunnerService.dispatchCode(codeRunnerDto);
    }
}
