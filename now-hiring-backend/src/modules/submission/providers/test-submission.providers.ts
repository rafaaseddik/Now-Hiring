import {Connection} from 'mongoose';
import {DevTestSubmissionSchema, KnowledgeTestSubmissionSchema} from "../schemas/TestSubmission.schema";



export const testSubmissionProviders = [
    {
        provide: 'KNOWLEDGE_TEST_SUBMISSION_MODEL',
        useFactory: (connection: Connection) => connection.model('KnowledgeTestSubmission', KnowledgeTestSubmissionSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'DEV_TEST_SUBMISSION_MODEL',
        useFactory: (connection: Connection) => connection.model('DevTestSubmission', DevTestSubmissionSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
