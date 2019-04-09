import {Connection} from 'mongoose';
import {CandidateSchema, CompanySchema} from '../schemas/user.schema';



export const userProfileProviders = [
    {
        provide: 'CANDIDATE_MODEL',
        useFactory: (connection: Connection) => connection.model('Candidate', CandidateSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'COMPANY_MODEL',
        useFactory: (connection: Connection) => connection.model('Company', CompanySchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
