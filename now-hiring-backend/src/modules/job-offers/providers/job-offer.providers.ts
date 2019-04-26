import {Connection} from "mongoose";
import {JobOfferSchema} from "../schemas/JobOffer.schema";


export const JobOfferProviders = [
    {
        provide: 'JOB_OFFER_MODEL',
        useFactory: (connection: Connection) => connection.model('JobOffer', JobOfferSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];
