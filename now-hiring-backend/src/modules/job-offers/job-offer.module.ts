import { Module } from '@nestjs/common';
import {JobOfferProviders} from "./providers/job-offer.providers";
import {JobOfferService} from "./job-offer.service";
import {JobOfferController} from "./job-offer.controller";
import {DatabaseModule} from "../database/database.module";

@Module({
    providers:[...JobOfferProviders,JobOfferService],
    controllers:[JobOfferController],
    imports:[DatabaseModule]
})
export class JobOfferModule {}
