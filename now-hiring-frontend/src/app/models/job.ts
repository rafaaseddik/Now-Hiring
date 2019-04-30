import {Skill} from "./Skill";
import {User} from "./User";

export class Job {
	_id: string;
	title: string;
	description: string;
	creationDate: string = "2010-11-11";
	expirationDate: string = "2020-01-10";
	timePlan: string;
	minSalary: number;
	maxSalary: number;
	skills: Skill[] = [];
	company: User;
	companyId: string;
}