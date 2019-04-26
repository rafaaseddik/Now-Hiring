import * as mongoose from 'mongoose';
import {AddressSchema} from "../../../user-profile/schemas/address.schema";
import {ExperienceDto} from "./experience.dto";

export class PersonalProjectsExperienceDto extends ExperienceDto{
    projectName:string;
    projectUrl:string;
}
