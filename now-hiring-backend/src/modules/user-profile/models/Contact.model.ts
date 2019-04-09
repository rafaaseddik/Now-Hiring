import { Document } from 'mongoose';
export interface Contact extends Document{
    facebookLink: string,
    linkedInLink: string,
    githubLink: string,
    stackoverflowLink: string,
    superUserLink: string,
    website: string,
}
