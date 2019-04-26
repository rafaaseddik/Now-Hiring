import { Document } from 'mongoose';

import {EducationExperience} from "./experience/EducationExprience";
import {PersonalProjectsExperience} from "./experience/PersonalProjectsExprience";
import {WorkExprience} from "./experience/workExprience.dto";

export interface Resume extends Document{
    professionalTitle: string;
    work_experience: Array<WorkExprience>;
    education_experience: Array<EducationExperience> ;
    personal_projects_experience: Array<PersonalProjectsExperience>;
    skills: Array<{
        name:string,
        level:number
    }>
    candidateId:string
}
