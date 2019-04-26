import * as mongoose from 'mongoose';
import {AddressSchema} from "../../../user-profile/schemas/address.schema";
import {Experience} from "./experience";


export interface EducationExperience extends Experience{
    schoolName:string;
}
