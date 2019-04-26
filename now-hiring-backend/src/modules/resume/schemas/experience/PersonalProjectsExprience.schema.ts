import * as mongoose from 'mongoose';
import {AddressSchema} from "../../../user-profile/schemas/address.schema";

export const PersonalProjectsExperienceSchema = new mongoose.Schema({
    startDate:Date,
    endDate:Date,
    description:String,
    position:String,
    address: AddressSchema,
    projectName: String,
    projectUrl:String
});
