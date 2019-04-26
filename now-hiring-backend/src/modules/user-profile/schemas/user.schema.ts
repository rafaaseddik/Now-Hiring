import * as mongoose from 'mongoose';
import {Schema} from "mongoose";
import {AddressSchema} from "./address.schema";
import {ContactSchema} from "./contact.schema";

const CandidateSchema = new mongoose.Schema({
    email: String,
    password: String,
    isVerified: Boolean,
    fname: String,
    lname: String,
    birthdate: Date,
    phoneNumber: String,
    imageUrl: String,
    about: String,
    contact:ContactSchema,
    address:AddressSchema,
    resume:{type:Schema.Types.ObjectId,ref:"Resume"}
});

export {CandidateSchema};

export const CompanySchema = new mongoose.Schema({
    email: String,
    password: String,
    isVerified: Boolean,
    companyName: String,
    companyUrl: String,
    phoneNumbers: String,
    employeesNumber: String,
    description: String,
    speciality: String,
    foundationYear: Number,
    about: String,
    logoUrl: String,
    ceoName: String,
    contact:ContactSchema,
    address:AddressSchema,
});

export enum USER_TYPE {
    DEFAULT = 'DEFAULT',
    CANDIDATE = 'CANDIDATE',
    COMPANY = 'COMPANY',
    ADMIN = 'ADMIN',
}
