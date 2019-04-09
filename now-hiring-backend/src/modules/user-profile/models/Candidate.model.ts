import {User} from "./User.model";
import {Contact} from "./Contact.model";
import {Address} from "./Address.model";

export interface Candidate extends User{

    fname: string;
    lname: string;
    birthdate: Date;
    phoneNumber: string;
    imageUrl: string;
    about: string;
    contact:Contact
    address:Address
}
