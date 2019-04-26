import { Document } from 'mongoose';

export interface JobOffer extends Document{

    title: string;
    description: string;
    creationDate: Date;
    expirationDate: Date;
    timePlan: string;
    minSalary: number;
    maxSalary: number;

    skills: Array<{
        name:string,
        level:number
    }>
    companyId:string
}
