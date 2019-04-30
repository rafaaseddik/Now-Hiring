import {Contact} from "./Contact";
import {Address} from "./Address";
import {Resume} from "./Resume";

export class User {
	_id: string;
	email: string;
	password: string;
	fname: string;
	lname: string;
	birthdate: string;
	phoneNumber: string;
	imageUrl: string;
	about: string;
	companyName: string;
	companyUrl: string;
	phoneNumbers: string;
	employeesNumber: string;
	description: string;
	speciality: string;
	foundationYear: number;
	offersNumber: number = 3;
	logoUrl: string;
	ceoName: string;
	resume: Resume;
	contact: Contact;
	address: Address;
	__v: number;
}