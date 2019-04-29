import { Document } from 'mongoose';
export interface Test extends Document{
    title:string;
    description:string;
    jobOfferId:string;
}
