import * as mongoose from 'mongoose';
import {AddressSchema} from "../../../user-profile/schemas/address.schema";

export const EducationExperienceSchema = new mongoose.Schema({
    startDate:Date,
    endDate:Date,
    description:String,
    position:String,
    schoolName: String,
    address: AddressSchema
});
