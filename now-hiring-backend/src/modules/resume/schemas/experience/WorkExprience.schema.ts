import * as mongoose from 'mongoose';
import {AddressSchema} from "../../../user-profile/schemas/address.schema";

export const WorkExperienceSchema = new mongoose.Schema({
    startDate:Date,
    endDate:Date,
    description:String,
    position:String,
    address: AddressSchema,
    companyName: String,
    companyUrl:String
});
