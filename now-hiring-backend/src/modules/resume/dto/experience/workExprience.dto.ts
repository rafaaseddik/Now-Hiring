import * as mongoose from 'mongoose';
import {AddressSchema} from "../../../user-profile/schemas/address.schema";
import {ExperienceDto} from "./experience.dto";
import {Address} from "../../../user-profile/models/Address.model";

export class WorkExprienceDto extends ExperienceDto{
    companyName:string;
    companyUrl:string;
}
