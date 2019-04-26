
import { Document } from 'mongoose';
import {AddressSchema} from "../../../user-profile/schemas/address.schema";
import {Experience} from "./experience";
import {Address} from "../../../user-profile/models/Address.model";

export interface WorkExprience extends Experience{
    companyName:string;
    companyUrl:string;
}
