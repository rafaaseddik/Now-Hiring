import {Pipe, PipeTransform} from '@angular/core';
import {Experience} from "../../models/Experience";
import * as moment from 'moment';

@Pipe({
	name: 'experienceDate'
})
export class ExperiencePipePipe implements PipeTransform {

	transform(value: any, args?: any): any {
		let experience: Experience = value;
		let start = moment(experience.startDate);
		let end = moment(experience.endDate);
		return start.format('MMM YYYY') + ' - ' + end.format(('MMM YYYY'))
	}

}
