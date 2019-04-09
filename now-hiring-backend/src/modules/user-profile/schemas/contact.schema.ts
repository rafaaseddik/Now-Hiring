import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
    facebookLink: String,
    linkedInLink: String,
    githubLink: String,
    stackoverflowLink: String,
    superUserLink: String,
    website: String,
});

