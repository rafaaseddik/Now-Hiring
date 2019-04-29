import {HttpModule, Module} from '@nestjs/common';
import {KnowledgeTestController} from "./knowledge-test.controller";
import {testProviders} from "./providers/test.providers";
import {KnowledgeTestService} from "./knowledge-test.service";
import {DatabaseModule} from "../database/database.module";
import {DevTestController} from "./dev-test.controller";
import {DevTestService} from "./dev-test.service";

@Module({
    controllers:[KnowledgeTestController,DevTestController],
    providers:[
        ...testProviders,KnowledgeTestService,DevTestService
    ],
    imports:[DatabaseModule,HttpModule],
    exports:[...testProviders]
})
export class TestModule {}
