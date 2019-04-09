import {User} from "./User.model";
import {Contact} from "./Contact.model";


export interface Company extends User{
    companyName: string;
    companyUrl: string;
    phoneNumbers: string;
    employeesNumber: string;
    description: string;
    speciality: string;
    foundationYear: number;
    about: string;
    logoUrl: string;
    ceoName: string;
    contact:Contact
}
