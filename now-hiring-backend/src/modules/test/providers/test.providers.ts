import {Connection} from 'mongoose';
import {DevTestSchema, KnowledgeTestSchema} from "../schemas/test.schema";



export const testProviders = [
    {
        provide: 'KNOWLEDGE_TEST_MODEL',
        useFactory: (connection: Connection) => connection.model('KnowledgeTest', KnowledgeTestSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'DEV_TEST_MODEL',
        useFactory: (connection: Connection) => connection.model('DevTest', DevTestSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
