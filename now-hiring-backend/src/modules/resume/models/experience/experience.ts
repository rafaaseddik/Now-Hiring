import { Document } from 'mongoose';
import {Address} from "../../../user-profile/models/Address.model";

export interface Experience extends Document{
    startDate:Date;
    endDate:Date;
    description:string;
    position:string;
    address: Address;
}
