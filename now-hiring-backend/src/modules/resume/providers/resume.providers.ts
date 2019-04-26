import {Connection} from "mongoose";
import {ResumeSchema} from "../schemas/Resume.schema";


export const ResumeProviders = [
    {
        provide: 'RESUME_MODEL',
        useFactory: (connection: Connection) => connection.model('Resume', ResumeSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];
