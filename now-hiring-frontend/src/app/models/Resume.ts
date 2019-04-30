import {Educationexperience, Workexperience} from "./Experience";
import {Skill} from "./Skill";

export class Resume {
    _id: string = "";
    professionalTitle: string = "";
    work_experience: Workexperience[] = [];
    education_experience: Educationexperience[] = [];
    skills: Skill[] = [];
    candidateId: string = "";
    personal_project: any[] = [];
    __v: number = 0;
}