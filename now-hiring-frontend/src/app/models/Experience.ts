import {Address} from "./Address";
import * as moment from 'moment';

export class Experience {
	_id: string;
	startDate: string;
	endDate: string;
	description: string;
	position: string;
	address: Address = new Address();

	public display() {
		let start = moment(this.startDate);
		return start.format('MMMM YYYY')
	}
}

export class Educationexperience extends Experience {
	schoolName: string;
}

export class Workexperience extends Experience {
	companyName: string;
	companyUrl: string;
}