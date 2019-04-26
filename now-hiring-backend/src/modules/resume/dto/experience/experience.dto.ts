import {Address} from "../../../user-profile/models/Address.model";

export class ExperienceDto{
    startDate:Date;
    endDate:Date;
    description:string;
    position:string;
    address: Address;
}
